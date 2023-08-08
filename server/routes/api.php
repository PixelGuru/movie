<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PaymentController;
use App\Http\Controllers\API\V1\Admin\ListUser;
use App\Http\Controllers\API\V1\Admin\MovieController;
use App\Http\Controllers\API\V1\Admin\OrderController;
use App\Http\Controllers\API\V1\Admin\ScreeningController;
use App\Http\Controllers\API\V1\Admin\SeatController;
use App\Http\Controllers\API\V1\Admin\TicketController;
use App\Http\Controllers\API\V1\Client\ClientController;
use App\Models\Tickets;
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


Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });
});



// Route::resource('cinema-branches', CinemaBranchController::class);
// Route::resource('cinemas', CinemaController::class);


// Route::resource('foods', FoodController::class);
// Route::resource('tickets', TicketController::class);
// Route::resource('movie-reviews', MovieReviewController::class);


Route::resource('listUser', ListUser::class);
Route::resource('movies', MovieController::class);
Route::resource('screenings', ScreeningController::class);
Route::resource('order', OrderController::class);

// Route::get('/screenings/{id}', [ScreeningController::class, 'show']);
Route::get('/screenings/{id}/seats', [SeatController::class, 'index']);
Route::post('/screenings/{id}/book', [SeatController::class, 'book']);
Route::post('/bookings', [TicketController::class, 'Booking']);

Route::post('/create-payment', [PaymentController::class, 'createPayment'])->name('payment.create');
Route::get('/payment-return', [PaymentController::class, 'handleReturn'])->name('payment.return');


Route::get('/movie/show', [ClientController::class, 'showMovie']);
Route::get('/show-time/ho-chi-minh', [ClientController::class, 'showTimeHoChiMinh']);
Route::get('/show-time/ho-chi-minh/booking/{screeningId}', [ClientController::class, 'getShowTimeBooking']);
