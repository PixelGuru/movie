<?php

namespace App\Http\Controllers;

use App\Events\PaymentSuccessful;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    // public function sendEmail(Request $request)
    // {
    //     // Gọi event để gửi email
    //     $order = 123;
    //     event(new PaymentSuccessful($order)); // Thay thế tham số event bằng tham số thích hợp

    //     return response()->json(['message' => 'Email sent successfully']);
    // }
}
