<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ListUser;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);
        if ($request->gender === 'Nam') {
            $gender = 0;
        } elseif ($request->gender === 'Nữ') {
            $gender = 1;
        } else {
            $gender = 2;
        }
        $formattedBirthday = Carbon::createFromFormat('d/m/Y', $request->birthday)->format('Y-m-d');
        if ($validator->fails()) return response()->json($validator->errors());
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'gender' => $gender,
            'birthday' => $formattedBirthday,
            'phone' => $request->phone,
            'role' => $request->role ?? 0,
            'level' => $request->level,
        ]);
        if ($request->gender === 'Nam') {
            $gender = 0;
        } elseif ($request->gender === 'Nữ') {
            $gender = 1;
        } else {
            $gender = 2;
        }
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(
            ['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer',]
        );
    }
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'data' => new ListUser(Auth::user()) ,
            'access_token' => $token, 'token_type' => 'Bearer',
        ]);
    }
}
