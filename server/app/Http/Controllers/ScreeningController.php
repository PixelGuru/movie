<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ScreeningResource;
use App\Models\Screenings;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ScreeningController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function getScreeningHCM()
    {
        $screenings = Screenings::select('screenings.*', 'cinemas.name as cinema_name', 'movies.name as movie_name')
            ->join('cinemas', 'screenings.cinema_id', '=', 'cinemas.id')
            ->join('movies', 'screenings.movie_id', '=', 'movies.id')
            ->get();
        $screeningHCM = $screenings->where('cinema_name', 'Hồ Chí Minh');

        return response()->json([
            'status' => true,
            'message' => 'Get list show time HCM',
            'data' => ScreeningResource::collection($screeningHCM)
        ], Response::HTTP_OK);
    }
    public function getScreeningDN()
    {
        $screenings = Screenings::select('screenings.*', 'cinemas.name as cinema_name', 'movies.name as movie_name')
            ->join('cinemas', 'screenings.cinema_id', '=', 'cinemas.id')
            ->join('movies', 'screenings.movie_id', '=', 'movies.id')
            ->get();
        $screeningDN = $screenings->where('cinema_name', 'Hồ Chí Minh');

        $screeningDN = $screenings->where('cinema_name', 'Đà Nẵng');
        return response()->json([
            'status' => true,
            'message' => 'Get list show time DN',
            'data' => ScreeningResource::collection($screeningDN)
        ], Response::HTTP_OK);
    }
    public function index()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
