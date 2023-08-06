<?php

namespace App\Http\Controllers\API\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Seat;
use Illuminate\Http\Request;

class SeatController extends Controller
{
    public function index($screeningId)
    {
        $seats = Seat::where('screening_id', $screeningId)->get();
        return response()->json($seats);
        dd($seats);
    }

    public function book($screeningId)
    {
        // Xử lý đặt vé, lưu thông tin đặt vé vào CSDL, cập nhật trạng thái của ghế, v.v.
        // Ví dụ:
        $seats = request('seats');
        // ... Xử lý và lưu thông tin đặt vé vào CSDL ...
        return response()->json(['message' => 'Đặt vé thành công']);
    }
}
