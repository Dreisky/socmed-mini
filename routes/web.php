<?php

use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [SessionController::class, 'index'])->name('user.index');
Route::post('/login', [SessionController::class, 'store'])->name('user.login');
Route::get('/register', [RegisteredUserController::class, 'index'])->name('user.register');
Route::post('/register', [RegisteredUserController::class, 'store'])->name('user.store');

Route::middleware(['auth'])->group(function () {
    Route::prefix('/admins')->group(function () {

    });
});
