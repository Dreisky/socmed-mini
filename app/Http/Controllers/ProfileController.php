<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function index()
    {
        return inertia('Home/Profile', [
            'user' => Auth::user(),
        ]);
    }

    public function update_info(Request $request)
    {
        $validated = $request->validate([
            'username' => ['required'],
            'email'    => ['required', 'email'],
        ]);

        $request->user()->update($validated);
    }

    public function update_pass(Request $request)
    {
        $request->validate([
            'current_password' => ['required', 'current_password'],
            'password'         => ['required', 'confirmed', 'min:6'],
        ]);

        $request->user()->update([
            'password' => Hash::make($request->password),
        ]);
    }

    public function delete(Request $request)
    {
        $request->user()->delete();

        return redirect(route('home.index'));
    }
}
