<?php
namespace App\Http\Controllers;

use App\Models\Post;

class HomeController extends Controller
{
    public function index()
    {
        $userId = auth()->id(); // safe reference

        return inertia('Home/Index', [
            'posts' => Post::with('user', 'likes')
                ->latest()
                ->get()
                ->map(function ($post) use ($userId) {
                    return [
                        'id'          => $post->id,
                        'description' => $post->description,
                        'created_at'  => $post->created_at,
                        'user'        => $post->user,

                        'likes_count' => $post->likes->count(),

                        // ✅ SAFE
                        'is_liked'    => $userId
                            ? $post->likes->contains('user_id', $userId)
                            : false,
                    ];
                }),
        ]);
    }
}
