<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\SetUpController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/login');

Route::get('/login', [SessionController::class, 'index'])->name('login');
Route::post('/login', [SessionController::class, 'store'])->name('user.login');
Route::delete('/logout', [SessionController::class, 'destroy'])->name('user.logout');
Route::get('/register', [RegisteredUserController::class, 'index'])->name('user.register');
Route::post('/register', [RegisteredUserController::class, 'store'])->name('user.store');

Route::middleware(['auth'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home.index');

    Route::get('/setup/pic', [SetUpController::class, 'index'])->name('setup.pic');
    Route::post('/setup/pic', [SetUpController::class, 'storeProfilePic'])->name('setup.pic.post');

    Route::post('/post', [PostController::class, 'store'])->name('post.store');
    Route::put('/post/{post}', [PostController::class, 'update'])->name('post.update');
    Route::delete('/post/{post}', [PostController::class, 'destroy'])->name('post.delete');

    Route::post('/like/{post}', [LikeController::class, 'store'])->name('like.store');

    Route::post('/comment', [CommentController::class, 'store'])->name('comment.store');

    Route::get('/profile/edit', [ProfileController::class, 'index'])->name('profile.index');
    Route::put('/profile/edit', [ProfileController::class, 'update_info'])->name('profile.update');
    Route::put('/profile/edit/pass', [ProfileController::class, 'update_pass'])->name('pass.update');
    Route::delete('/profile/delete', [ProfileController::class, 'delete'])->name('account.delete');
});
