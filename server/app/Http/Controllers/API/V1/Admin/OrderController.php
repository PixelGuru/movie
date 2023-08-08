<?php

namespace App\Http\Controllers\API\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return response()->json([
            'status' => true,
            'data' => OrderResource::collection($orders)
        ], Response::HTTP_OK);
    }
    public function show($id)
    {
        $order = order::find($id);
        if (!$order) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Movie not found'
                ],
                Response::HTTP_NOT_FOUND
            );
        }
        return response()->json([
            'status' => true,
            'data' => new OrderResource($order)
        ], Response::HTTP_OK);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'total_price' => 'required|numeric|min:0',
            'user_name' => 'required|string|max:255',
            'user_email' => 'required|email|max:255',
            'user_phone' => 'nullable|string|max:20',
            'movie_name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $order_id = date('YmdHis') . substr(microtime(), 2, 3);

        $order = Order::create([
            'order_id' =>  $order_id,
            'user_id' => $request->user_id,
            'user_name' => $request->user_name,
            'user_email' => $request->user_email,
            'user_phone' => $request->user_phone,
            'screening_id' => $request->screening_id,
            'cinema_name' => $request->cinema_name,
            'movie_name' => $request->movie_name,
            'selected_seats' => $request->selected_seats,
            'total_price' => $request->total_price,

        ]);

        return response()->json([
            'status' => true,
            'message' => 'Order created successfully',
            'data' => new OrderResource($order)
        ]);
    }
}
