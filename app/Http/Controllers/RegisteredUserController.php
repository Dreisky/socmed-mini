<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisteredUserController extends Controller
{
    public function index()
    {
        return inertia('Register');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'username' => ['required', 'min:3'],
            'email'    => ['required', 'email'],
            'gender'   => ['required'],
            'password' => ['required'],
        ]);

        $user = User::Create($attributes);

        Auth::login($user);

        return redirect('/');
    }
}
