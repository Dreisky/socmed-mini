<?php
namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'comment' => ['required'],
            'post_id' => ['required'],
        ]);

        Comment::create([
            'comment' => $validated['comment'],
            'post_id' => $validated['post_id'],
            'user_id' => auth()->user()->id,
        ]);
    }
}
