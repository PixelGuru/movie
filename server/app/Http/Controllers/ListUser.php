<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ListUser as ResourcesListUser;
use App\Models\ListUser as ModelsListUser;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class ListUser  extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $listUser = ModelsListUser::all();
        return response()->json(
            ResourcesListUser::collection($listUser),
            Response::HTTP_OK
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // try {
        $request->validate([
            'name' => 'required',
            // 'gender' => 'required',
            // 'birthday' => 'required',
            'email' => 'required',
            'password' => 'required',
            // 'phone' => 'required',
            'role' =>  Rule::in([0, 1, 2]),
        ]);
        $listUser = ModelsListUser::create([
            'name' => $request->name,
            'gender' => $request->gender,
            'birthday' => $request->birthday,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'role' => $request->role,
            'level' => $request->level
        ]);
        return response()->json(
            new ResourcesListUser($listUser),
            Response::HTTP_OK
        );
        // } catch (ValidationException $e) {
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'Validation error',
        //         'errors' => $e->errors(),
        //     ], Response::HTTP_UNSUPPORTED_MEDIA_TYPE);
        // } catch (\Exception $e) {
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'Something went wrong',
        //     ], Response::HTTP_INTERNAL_SERVER_ERROR);
        // }
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $listUser = ModelsListUser::find($id);
        if (!$listUser) {
            return response()->json([
                'status' => false,
                'message' => 'Product not found'
            ], Response::HTTP_NOT_FOUND);
        }
        return response()->json(
            new ResourcesListUser($listUser),
            Response::HTTP_OK
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $listUser = ModelsListUser::find($id);
            if (!$listUser) {
                return response()->json([
                    'status' => false,
                    'message' => 'User Not Found',
                ], Response::HTTP_NOT_FOUND);
            }
            $request->validate([
                'name' => 'required',
                // 'gender' => 'required',
                'birthday' => 'required',
                'email' => 'required|min:6|max:20',
                'password' => 'required',
                // 'phone' => 'required',
                'role' =>  Rule::in([0, 1, 2]),
            ]);

            $listUser->name = $request->name;
            $listUser->gender = $request->gender;
            $listUser->birthday = $request->birthday;
            $listUser->email = $request->email;
            $listUser->password = Hash::make($request->password);
            $listUser->phone = $request->phone;
            $listUser->role = $request->role;
            $listUser->save();

            return response()->json(
                new ResourcesListUser($listUser),
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
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $listUser = ModelsListUser::find($id);
        if (!$listUser) {
            return response()->json([
                'status' => false,
                'message' => 'User not found'
            ], Response::HTTP_NOT_FOUND);
        }
        $listUser->delete();
        return response()->json([
            'status' => true,
            'message' => 'Delete user success',
            'data' => []
        ], Response::HTTP_OK);
    }
}
