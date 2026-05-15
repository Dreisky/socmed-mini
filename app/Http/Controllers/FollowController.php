<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function follow(string $username) 
    {
        $user = User::where('username', $username)->firstOrFail();
        $authUser = auth()->user();

        if($authUser->id === $user->id) {
            return back();
        }

        $authUser->following()->toggle($user->id);

        return back();
    }
}
