<?php
namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => ['required'],
        ]);

        Post::create([
            'user_id'     => auth()->user()->id,
            'description' => $validated['description'],
        ]);
    }
}
