<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $userId = $user->id;

        return inertia('Home/Profile', [
            'user' => $user,

            'posts' => $user->posts()
                ->with('user', 'likes', 'comments.user')
                ->latest()
                ->get()
                ->map(function ($post) use ($userId) {
                    return [
                        'id'             => $post->id,
                        'description'    => $post->description,
                        'created_at'     => $post->created_at,
                        'user'           => $post->user,
                        'post_photo'     => $post->post_photo,

                        'comments'       => $post->comments,
                        'comments_count' => $post->comments->count(),

                        'likes_count'    => $post->likes->count(),

                        'is_liked'       => $post->likes->contains('user_id', $userId),
                    ];
                }),
        ]);
    }

    public function edit()
    {
        return inertia('Home/ProfileInformation', [
            'user' => Auth::user(),
        ]);
    }

    public function update_info(Request $request)
    {
        $validated = $request->validate([
            'username' => ['required'],
            'email'    => ['required', 'email'],
        ]);

        $request->user()->update($validated);
    }

    public function update_pass(Request $request)
    {
        $request->validate([
            'current_password' => ['required', 'current_password'],
            'password'         => ['required', 'confirmed', 'min:6'],
        ]);

        $request->user()->update([
            'password' => Hash::make($request->password),
        ]);
    }

    public function delete(Request $request)
    {
        $request->user()->delete();

        return redirect(route('home.index'));
    }
}
