<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MovieController extends Controller
{
    public function showCarousel()
    {
        $movie = Movie::where('status', 1)->orderBy('id', 'DESC')->get();
        return response()->json([
            'status' => true,
            'message' => 'Get list movie success',
            'data' => MovieResource::collection($movie)
        ], Response::HTTP_OK);
    }
}
