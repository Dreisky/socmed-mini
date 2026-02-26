<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [SessionController::class, 'index'])->name('user.index');
Route::post('/login', [SessionController::class, 'store'])->name('user.login');
Route::delete('/logout', [SessionController::class, 'destroy'])->name('user.logout');
Route::get('/register', [RegisteredUserController::class, 'index'])->name('user.register');
Route::post('/register', [RegisteredUserController::class, 'store'])->name('user.store');

Route::middleware(['auth'])->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home.index');

    Route::post('/post', [PostController::class, 'store'])->name('post.store');
});
