<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CoverController extends Controller
{
    public function storeCoverPhoto(Request $request)
    {
        $request->validate([
            'cover_photo' => ['required', 'image'],
        ]);

        $user = $request->user();

        if ($request->hasFile('cover_photo')) {

            if ($user->cover_photo && Storage::disk('public')->exists($user->cover_photo)) {
                Storage::disk('public')->delete($user->cover_photo);
            }

            $path = $request->file('cover_photo')->store('cover_photos', 'public');

            $user->cover_photo = $path;
            $user->save();
        }

        return back();
    }

}
