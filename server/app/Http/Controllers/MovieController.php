<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movie = Movie::all();
        return response()->json(
            [
                'status' => true,
                'message' => 'List Movie',
                'data' => MovieResource::collection($movie),
            ],
            Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required',
                'genre' => 'required',
                'duration' => 'required',
                'actors' => 'required',
                'director' => 'required',
                'content' => 'required',
                'status' => 'required|in:0,1',
            ]);
            $movie = Movie::create([
                'name' => $request->name,
                'genre' => $request->genre,
                'duration' => $request->duration,
                'actors' => $request->actors,
                'director' => $request->director,
                'content' => $request->content,
                'status' => $request->status,
            ]);
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Add movie success',
                    'data' =>  new MovieResource($movie),
                ],
                Response::HTTP_OK
            );
        } catch (ValidationException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ], Response::HTTP_UNSUPPORTED_MEDIA_TYPE);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $movie = Movie::find($id);
        if (!$movie) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Movie not found'
                ],
                Response::HTTP_NOT_FOUND
            );
        } else {
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Get movie success',
                    'data' => new MovieResource($movie),
                ],
                Response::HTTP_OK
            );
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $movie = Movie::find($id);
        if (!$movie) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Movie not found'
                ],
                Response::HTTP_NOT_FOUND
            );
        } else {
            try {
                $request->validate([
                    'name' => 'required',
                    'genre' => 'required',
                    'duration' => 'required',
                    'actors' => 'required',
                    'director' => 'required',
                    'content' => 'required',
                    'status' => 'required|in:0,1',
                ]);
                $movie->name = $request->name;
                $movie->genre = $request->genre;
                $movie->duration = $request->duration;
                $movie->actors = $request->actors;
                $movie->director = $request->director;
                $movie->content = $request->content;
                $movie->status = $request->status;
                $movie->save();
                return response()->json(
                    [
                        'status' => true,
                        'message' => 'Update movie success',
                        'data' => new MovieResource($movie)
                    ],
                    Response::HTTP_OK
                );
            } catch (ValidationException $e) {
                return response()->json(
                    [
                        'status' => false,
                        'message' => 'Validation error',
                        'error' => $e->errors()
                    ],
                    Response::HTTP_UNSUPPORTED_MEDIA_TYPE
                );
            } catch (\Exception) {
                return response()->json(
                    [
                        'status' => false,
                        'message' => 'Something went wrong'
                    ],
                    Response::HTTP_INTERNAL_SERVER_ERROR
                );
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $movie = Movie::find($id);
        if (!$movie) {
            return response()->json([
                'message' =>  'Movie not found',
            ], Response::HTTP_NOT_FOUND);
        }
        $movie->delete();
        return response()->json([
            'status' => true,
            'message' => 'Delete movie success'
        ], Response::HTTP_OK);
    }
}