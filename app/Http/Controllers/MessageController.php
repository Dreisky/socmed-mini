<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function index()
    {
        return Inertia::render('Messages/Index', [
            'conversations' => $this->getConversations(),
        ]);
    }

    public function show(string $username)
    {
        $receiver = User::where("username", $username)->firstOrFail();
        $authId = auth()->id();

        // Mark received messages as read
        Message::where('sender_id', $receiver->id)
            ->where('receiver_id', $authId)
            ->whereNull('read_at')
            ->update(['read_at' => now()]);

        $messages = Message::query()
            ->where(function ($q) use ($authId, $receiver) {
                $q->where('sender_id', $authId)->where('receiver_id', $receiver->id);
            })
            ->orWhere(function ($q) use ($authId, $receiver) {
                $q->where('sender_id', $receiver->id)->where('receiver_id', $authId);
            })
            ->orderBy('created_at')
            ->get();

        return Inertia::render('Messages/Show', [
            'receiver' => $receiver,
            'messages' => $messages,
            'conversations' => $this->getConversations()
        ]);
    }
    
    public function store(Request $request, string $username) {
        $request->validate(['body' => ['required', 'string', 'max:2000']]);

        $receiver = User::where("username", $username)->firstOrFail();

        Message::create([
            'sender_id' => auth()->id(),
            'receiver_id' => $receiver->id,
            'body' => $request->body,
        ]);

        return back();
    } 

    private function getConversations()
    {
        $authId = auth()->id();

        return Message::query()
            ->where('sender_id', $authId)
            ->orWhere('receiver_id', $authId)
            ->with(['sender', 'receiver'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->groupBy(function ($message) use ($authId) {
                return $message->sender_id === $authId
                    ? $message->receiver_id
                    : $message->sender_id;
            })
            ->map(function ($messages) use ($authId) {
                $latest = $messages->first();
                $otherUser = $latest->sender_id === $authId
                    ? $latest->receiver
                    : $latest->sender;

                return [
                    'user'         => $otherUser,
                    'last_message' => $latest->body,
                    'created_at'   => $latest->created_at,
                ];
            })
            ->values();
    }
}
