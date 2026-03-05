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
            'post_photo'  => ['nullable', 'image'],
        ]);

        if ($request->hasFile('post_photo')) {
            $validated['post_photo'] =
            $request->file('post_photo')
                ->store('photos', 'public');
        }

        Post::create([
            'user_id'     => auth()->user()->id,
            'description' => $validated['description'],
            'post_photo'  => $validated['post_photo'],
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
