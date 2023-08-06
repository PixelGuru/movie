<?php

namespace App\Http\Controllers\API\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tickets;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function Booking(Request $request)
    {
        $request->validate([]);
        // Nhận thông tin từ yêu cầu POST
        $userId = $request->input('user_id');
        $screeningId = $request->input('screening_id');
        $selectedSeats = $request->input('seat_number');

        // Lưu thông tin đặt vé vào database
        $ticket = new Tickets();
        $ticket->user_id = $userId;
        $ticket->screening_id = $screeningId;
        $ticket->seat_number =   $selectedSeats;
        $ticket->save();

        // Phản hồi thành công cho Frontend
        return response()->json(['message' => 'Đặt vé thành công'], 200);
    }
}
