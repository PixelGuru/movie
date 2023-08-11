<?php

namespace App\Http\Controllers\API\V1\Admin;

use App\Events\PaymentSuccessful;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\ListUser as ResourcesListUser;
use App\Mail\PaymentConfirmation;
use App\Models\ListUser as ModelsListUser;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class ListUser extends Controller
{
    public function index()
    {

        $listUser = ModelsListUser::all();
        return response()->json(
            ResourcesListUser::collection($listUser),
            Response::HTTP_OK
        );
    }
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required',
                'gender' => 'required',
                'birthday' => 'required',
                'email' => 'required',
                // 'password' => 'required|min:6',
                'phone' => 'required',
                'role' =>  'required',
            ]);
            if ($request->gender === 'Nam') {
                $gender = 0;
            } elseif ($request->gender === 'Nữ') {
                $gender = 1;
            } else {
                $gender = 2;
            }
            if ($request->role === 'Admin') {
                $role = 2;
            } elseif ($request->role === 'Nhân viên') {
                $role = 1;
            } else {
                $role = 0;
            }
            $formattedBirthday = Carbon::createFromFormat('d/m/Y', $request->birthday)->format('Y-m-d');
            $listUser = ModelsListUser::create([
                'name' => $request->name,
                'gender' => $gender,
                'birthday' => $formattedBirthday,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'phone' => $request->phone,
                'role' => $role,
                'level' => $request->level
            ]);
            return response()->json(
                new ResourcesListUser($listUser),
                Response::HTTP_OK
            );
        } catch (ValidationException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function show(string $id)
    {
        $order = 123;
        event(new PaymentConfirmation($order));

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

    public function update(Request $request, string $id)
    {
        $order = 123;
        event(new PaymentConfirmation($order));
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
                'gender' => 'required',
                'birthday' => 'required',
                'email' => 'required',
                // 'password' => 'required|min:6|max:20',
                'phone' => 'required',
                'role' =>  'required',
            ]);
            if ($request->gender === 'Nam') {
                $gender = 0;
            } elseif ($request->gender === 'Nữ') {
                $gender = 1;
            } else {
                $gender = 2;
            }
            if ($request->role === 'Admin') {
                $role = 2;
            } elseif ($request->role === 'Nhân viên') {
                $role = 1;
            } else {
                $role = 0;
            }
            $formattedBirthday = Carbon::createFromFormat('d/m/Y', $request->birthday)->format('Y-m-d');
            $listUser->name = $request->name;
            $listUser->gender = $gender;
            $listUser->birthday = $formattedBirthday;
            $listUser->email = $request->email;
            $listUser->password = Hash::make($request->password);
            $listUser->phone = $request->phone;
            $listUser->role = $role;
            $listUser->level = $request->level;

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
                'message' => $e,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

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
