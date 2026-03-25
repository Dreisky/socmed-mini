<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SetUpController extends Controller
{
    public function index()
    {
        return inertia('Setup/Pic');
    }

    public function storeProfilePic(Request $request)
    {
        $request->validate([
            'profile_picture' => ['nullable', 'image'],
        ]);

        $user = $request->user();

        if ($request->hasFile('profile_picture')) {
            $path = $request->file('profile_picture')->store('profile_pictures', 'public');

            $user->profile_picture = $path;
            $user->save();
        }

        return redirect(route("home.index"))->with('success', 'Welcome to Blinkr');
    }
}
