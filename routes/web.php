<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;

Route::get("/user", [UserController::class, 'index']);
Route::get("user/toroku", [UserController::class, 'torokuPage']);
Route::post("user/toroku", [UserController::class, 'toroku']);
Route::get("user/henshu/{id}", [UserController::class, 'henshuPage']);
Route::post("user/henshu/{id}", [UserController::class, 'henshu']);
Route::post("user/sakujo/{id}", [UserController::class, 'sakujo']);
