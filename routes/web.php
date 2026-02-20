<?php

use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;

Route::get('/', [SessionController::class, 'index'])->name('user.index');
Route::get('/register', [RegisteredUserController::class, 'index'])->name('user.register');
