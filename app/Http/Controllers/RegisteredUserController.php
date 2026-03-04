<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisteredUserController extends Controller
{
    public function index()
    {
        return inertia('Register');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'username'        => ['required', 'min:3'],
            'email'           => ['required', 'email'],
            'gender'          => ['required'],
            'password'        => ['required'],
            'profile_picture' => ['nullable'],
        ]);

        if ($request->hasFile('profile_picture')) {
            $attributes['profile_picture'] =
            $request->file('profile_picture')
                ->store('profiles', 'public');
        }

        User::Create($attributes);

        // Auth::login($user);

        return redirect('/login');
    }
}
