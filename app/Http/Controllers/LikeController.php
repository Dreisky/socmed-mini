<?php
namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;

class LikeController extends Controller
{
    public function store(Post $post)
    {
        Like::create([
            'post_id' => $post->id,
            'user_id' => auth()->user()->id,
        ]);
    }
}
