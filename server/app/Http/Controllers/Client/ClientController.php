<?php

namespace App\Http\Controllers\Client;

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

    public function showTime()
    {

        $screenings = Screenings::select('screenings.*', 'cinemas.name as cinema_name', 'movies.name as movie_name')
            ->join('cinemas', 'screenings.cinema_id', '=', 'cinemas.id')
            ->join('movies', 'screenings.movie_id', '=', 'movies.id')
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'Get list show time success',
            'data'=> ScreeningResource::collection($screenings)
        ], Response::HTTP_OK);
    }
}
