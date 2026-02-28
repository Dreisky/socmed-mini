<?php
namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;

class LikeController extends Controller
{
    public function store(Post $post)
    {
        $like = Like::where([
            'post_id' => $post->id,
            'user_id' => auth()->id(),
        ])->first();

        if ($like) {
            // Already liked → remove the like
            $like->delete();
            return;
        }

        // Not liked yet → create the like
        Like::create([
            'post_id' => $post->id,
            'user_id' => auth()->id(),
        ]);
    }
}
