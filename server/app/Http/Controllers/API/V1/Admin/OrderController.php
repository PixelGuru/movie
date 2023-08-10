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
    public function getOrderSuccess()
    {
        $orders = order::where('status', 'Success')->get();
        return response()->json([
            'status' => true,
            'message' => 'Get list order success',
            'data' => OrderResource::collection($orders)
        ], Response::HTTP_OK);
    }

    public function getDetailOrderSuccess($order_id)
    {
        $orders = order::where('status', 'Success')
            ->where('order_id', $order_id)
            ->get();

        return response()->json([
            'status' => true,
            'message' => 'Get detail order success',
            'data' => OrderResource::collection($orders)
        ], Response::HTTP_OK);
    }
    public function getAllOrder()
    {
        $orders = Order::all();
        return response()->json([
            'status' => true,
            'data' => OrderResource::collection($orders)
        ], Response::HTTP_OK);
    }

    public function getOrderForUser($user_id)
    {
        $orders = order::where('user_id', $user_id)
            ->where('status', 'Success')
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'Get detail order success',
            'data' => OrderResource::collection($orders)
        ], Response::HTTP_OK);
    }
}
