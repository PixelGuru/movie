<?php

namespace App\Http\Controllers\API\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ScreeningResource;
use App\Models\Cinemas;
use App\Models\Movie;
use App\Models\Screenings;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ScreeningController extends Controller
{ public function index()
    {
    $screenings = Screenings::select('screenings.*', 'cinemas.name as cinema_name', 'movies.name as movie_name')
            ->join('cinemas', 'screenings.cinema_id', '=', 'cinemas.id')
            ->join('movies', 'screenings.movie_id', '=', 'movies.id')
            ->where('movies.status', 1)
            ->get();

        return response()->json([
            'status' => true,
            'message' => 'Get list show time DN',
            'data' => ScreeningResource::collection($screenings)
        ], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate request data here if needed
        $request->validate([
            'date_show' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'price' => 'required',
            'room' => 'required',
            // 'remaining_seats' =>  'required',
        ]);

        // Find or create the movie record based on the input movie_name
        $movie = Movie::firstOrCreate(['name' => $request->input('movie_name')]);

        // Find or create the cinema record based on the input cinema_name
        $cinema = Cinemas::firstOrCreate(['name' => $request->input('cinema_name')]);

        // Create a new screening record with the new data
        $date_show = Carbon::createFromFormat('d/m/Y', $request->date_show)->format('Y-m-d');
        $screening = Screenings::create([
            'movie_id' => $movie->id,
            'cinema_id' => $cinema->id,
            'date_show' => $date_show,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'price' => $request->price,
            'room' => $request->room,
            // 'remaining_seats' => $request->input('remaining_seats'),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Screening created successfully',
            'data' => $screening
        ], Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $screening = Screenings::find($id);
        if (!$screening) {
            return response()->json([
                'status' => false,
                'message' => 'Screenings not found'
            ], Response::HTTP_NOT_FOUND);
        }
        $screenings = Screenings::select('screenings.*', 'cinemas.name as cinema_name', 'movies.name as movie_name')
            ->join('cinemas', 'screenings.cinema_id', '=', 'cinemas.id')
            ->join('movies', 'screenings.movie_id', '=', 'movies.id')
            ->where('movies.status', 1)
            ->where('screenings.id', $id)
            ->first();

        // dd($screenings);
        return response()->json(
            [
                'status' => true,
                'message' => 'Get detail success',
                'data' => new ScreeningResource($screenings)
            ],
            Response::HTTP_OK
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([

            'date_show' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'price' => 'required',
            'room' => 'required',
            // 'remaining_seats' =>  'required',
        ]);


        // Find the screening record to update
        $screening = Screenings::findOrFail($id);

        // Find or create the movie record based on the input movie_name
        $movie = Movie::firstOrCreate(['name' => $request->input('movie_name')]);

        // Find or create the cinema record based on the input cinema_name
        $cinema = Cinemas::firstOrCreate(['name' => $request->input('cinema_name')]);

        $date_show = Carbon::createFromFormat('d/m/Y', $request->date_show)->format('Y-m-d');
        $screening->movie_id = $movie->id;
        $screening->cinema_id = $cinema->id;
        $screening->date_show = $date_show;
        $screening->start_time = $request->start_time;
        $screening->end_time = $request->end_time;
        $screening->price = $request->price;
        $screening->room = $request->room;
        // $screening->remaining_seats = $request->remaining_seats;
        $screening->save();

        return response()->json([
            'status' => true,
            'message' => 'Screening updated successfully',
            'data' => $screening
        ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $screening = Screenings::find($id);
        if (!$screening) {
            return response()->json(
                [
                    'message' =>  'Movie not found',
                ],
                Response::HTTP_NOT_FOUND
            );
        }
        $screening->delete();
        return response()->json(
            [
                'status' => true,
                'message' => 'Delete movie success'
            ],
            Response::HTTP_OK
        );
    }
}
