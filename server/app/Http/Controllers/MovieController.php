<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
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
                'message' => 'List movie',
                'data' =>  MovieResource::collection($movie),
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
                'release_date' => 'required',
                'actors' => 'required',
                'director' => 'required',
                'content' => 'required',
                'posters' => 'required|image|mimes:jpeg,png,gif,jpg|max:2048', // Thay 2048 bằng dung lượng tối đa cho phép (tính bằng KB)
                'status' => 'required',
            ]);
            $fileName = null;
            if ($request->hasFile('posters')) {
                $file = $request->file('posters');
                $filename = time() . '_' . $file->getClientOriginalName();
                $request->file('posters')->move(public_path('images'), $filename);
            }
            dd($fileName);
            if ($request->status === 'Hide') {
                $status = 0;
            } elseif ($request->role === 'Show') {
                $status = 1;
            } else {
                $status = 2;
            }
       
            $releaseDate = Carbon::createFromFormat('d/m/Y', $request->release_date)->format('Y-m-d');
            $movie = Movie::create([
                'name' => $request->name,
                'genre' => $request->genre,
                'duration' => $request->duration,
                'release_date' => $releaseDate,
                'actors' => $request->actors,
                'director' => $request->director,
                'content' => $request->content,
                'status' => $status,
                'posters' =>  $fileName
            ]);
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Movie created successfully!',
                    'data' => new MovieResource($movie),
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
                $data = $request->validate([
                    'name' => 'required',
                    'genre' => 'required',
                    'duration' => 'required',
                    'actors' => 'required',
                    'director' => 'required',
                    'content' => 'required',
                    // 'posters' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
                    'status' => Rule::in(['Hide', 'Show', 'Coming Soon']),
                ]);
                $fileName = null;
                if ($request->hasFile('posters')) {
                    $file = $request->file('posters');
                    $filename = time() . '_' . $file->getClientOriginalName();
                    $request->file('posters')->move(public_path('images'), $filename);
                }
                dd($fileName);
                if ($data['status'] === 'Hide') {
                    $data['status'] = 0;
                } elseif ($data['status'] === 'Show') {
                    $data['status'] = 1;
                } else {
                    $data['status'] = 2;
                }
                $releaseDate = Carbon::createFromFormat('d/m/Y', $request->release_date)->format('Y-m-d');
                $movie->name = $data['name'];
                $movie->genre = $data['genre'];
                $movie->duration = $data['duration'];
                $movie->release_date = $releaseDate;
                $movie->actors = $data['actors'];
                $movie->director = $data['director'];
                $movie->content = $data['content'];
                $movie->posters = $data['posters'];
                $movie->status = $data['status'];
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
