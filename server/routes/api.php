<?php

use App\Http\Controllers\CinemaBranchController;
use App\Http\Controllers\CinemaController;
use App\Http\Controllers\Client\MovieController as ClientMovieController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\ListUser as ControllersListUser;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\MovieReviewController;
use App\Http\Controllers\ScreeningController;
use App\Http\Controllers\TicketController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::resource('listUser', ControllersListUser::class);
Route::resource('cinema-branches', CinemaBranchController::class);
Route::resource('cinemas', CinemaController::class);
Route::resource('movies', MovieController::class);
Route::resource('screenings', ScreeningController::class);
Route::resource('foods', FoodController::class);
Route::resource('tickets', TicketController::class);
Route::resource('movie-reviews', MovieReviewController::class);
Route::get('/movie/show', [ClientMovieController::class, 'showCarousel']);
