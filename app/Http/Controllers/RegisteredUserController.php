<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
            'email'    => ['required', 'email', 'unique:users,email'],
            'gender'   => ['required'],
            'password' => ['required'],
        ]);

        $attributes['password'] = Hash::make($attributes['password']);

        $user = User::Create($attributes);

        Auth::login($user);

        return redirect(route('setup.pic'));
    }
}
