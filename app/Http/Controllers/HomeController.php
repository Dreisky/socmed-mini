<?php
namespace App\Http\Controllers;

use App\Models\Post;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Home/Index', [
            'posts' => Post::with('user')->latest()->get(),
        ]);
    }
}
