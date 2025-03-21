<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Routes
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

// Authentication Routes (Login & Register)
require __DIR__.'/auth.php';

// Protected Routes (Only for Authenticated Users)
Route::middleware('auth')->group(function () {
    Route::get('/home', function () {
        return Inertia::render('Home');
    })->name('home');

    Route::get('/rant', function () {
        return Inertia::render('Rant');
    })->name('rant');

    Route::get('/explore', function () {
        return Inertia::render('Explore');
    })->name('explore');

    Route::get('/notification', function () {
        return Inertia::render('Notification');
    })->name('notification');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Catch-All Route (Redirects All Unknown Routes to Welcome)
Route::get('/{any}', function () {
    return Inertia::render('Welcome');
})->where('any', '.*');
