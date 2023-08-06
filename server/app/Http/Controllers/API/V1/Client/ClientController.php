<?php

namespace App\Http\Controllers\API\V1\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\MovieResource;
use App\Http\Resources\ScreeningResource;
use App\Models\Movie;
use App\Models\Screenings;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClientController extends Controller
{
    public function showMovie()
    {
        $movie = Movie::where('status', 1)->orderBy('id', 'DESC')->get();
        return response()->json([
            'status' => true,
            'message' => 'Get list movie success',
            'data' => MovieResource::collection($movie)
        ], Response::HTTP_OK);
    }

    public function showTimeHoChiMinh()
    {
        $screenings = Screenings::select('screenings.*', 'cinemas.name as cinema_name', 'movies.name as movie_name', 'movies.posters', 'movies.content')
            ->join('cinemas', 'screenings.cinema_id', '=', 'cinemas.id')
            ->join('movies', 'screenings.movie_id', '=', 'movies.id')
            ->where('cinemas.name', 'Hồ Chí Minh')
            ->where('movies.status', 1)
            ->get();
            // dd($screenings);
        return response()->json([
            'status' => true,
            'message' => 'Get list show time success',
            'data' => ScreeningResource::collection($screenings)
        ], Response::HTTP_OK);
    }
}
