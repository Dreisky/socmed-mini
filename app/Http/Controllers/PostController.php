<?php
namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => ['required', 'max:100'],
        ]);

        Post::create([
            'user_id'     => auth()->user()->id,
            'description' => $validated['description'],
        ]);
    }

    public function update(Post $post, Request $request)
    {
        $validated = $request->validate([
            'description' => ['required', 'max:100'],
        ]);

        $post->update($validated);
    }

    public function destroy(Post $post)
    {
        $post->delete();
    }
}
