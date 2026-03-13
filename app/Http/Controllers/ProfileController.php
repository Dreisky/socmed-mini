<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function index()
    {
        return inertia('Home/Profile', [
            'user' => Auth::user(),
        ]);
    }

    public function update(User $user, Request $request)
    {
        $validated = $request->validate([
            'username' => ['required'],
            'email'    => ['required'],
        ]);

        $user->update($validated);
    }
}
