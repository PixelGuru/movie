<?php

namespace App\Http\Controllers\API;

use App\Events\PaymentSuccessful as EventsPaymentSuccessful;
use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Mail\PaymentConfirmation;
use App\Models\order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class PaymentController extends Controller
{
    public function createPayment(Request $request)
    {
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $order_id = date('YmdHis') . substr(microtime(), 2, 3);
        $amount = $request->totalPrice;
        $vnp_TmnCode = '7O9I976R';
        $vnp_HashSecret = 'EFHJXQJELUELITZBZSIGZEWQOMQMLOPU';
        $vnp_ReturnUrl = 'http://127.0.0.1:8000/api/payment-return';
        $vnp_Url = 'http://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
        $vnp_Locale = 'vn';
        $vnp_IpAddr = $_SERVER['REMOTE_ADDR'];
        $startTime = date("YmdHis");
        $expire = date('YmdHis', strtotime('+10 minutes', strtotime($startTime)));
        $orderData = $request->orderData;

        $inputData = array(
            'vnp_Version' => '2.1.0',
            'vnp_TmnCode' => $vnp_TmnCode,
            'vnp_Amount' =>  $amount * 100,
            'vnp_Command' => 'pay',
            "vnp_CreateDate" => date('YmdHis'),
            'vnp_CurrCode' => 'VND',
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            'vnp_OrderInfo' => 'Thanh toán đơn hàng ' . $order_id,
            "vnp_OrderType" => "other",
            "vnp_ReturnUrl" => $vnp_ReturnUrl,
            'vnp_TxnRef' => $order_id,
            "vnp_ExpireDate" => $expire,
        );;

        ksort($inputData);
        $query = "";
        $i = 0;
        $hashData = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashData .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashData .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_Url = $vnp_Url . "?" . $query;
        if (isset($vnp_HashSecret)) {
            $vnpSecureHash =   hash_hmac('sha512', $hashData, $vnp_HashSecret);
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        };

        order::create([
            'order_id' =>   $order_id,
            'user_id' => $orderData['user_id'],
            'user_name' => $orderData['user_name'],
            'user_email' => $orderData['user_email'],
            'user_phone' => $orderData['user_phone'],
            'screening_id' => $orderData['screening_id'],
            'cinema_name' => $orderData['cinema_name'],
            'movie_name' => $orderData['movie_name'],
            'selected_seats' => $orderData['selected_seats'],
            'total_price' => $orderData['total_price'],
            'status' => 'Pending',
        ]);

        return response()->json(['redirect_url' => $vnp_Url, $orderData]);
    }

    public function handleReturn(Request $request)
    {
        $order_id = $request->vnp_TxnRef;
       
        $order = DB::table('order')->where('order_id', $order_id)->first();

        if ($order && $request->vnp_ResponseCode === '00') {
            $this->sendEmail($order);
            DB::table('order')
                ->where('order_id', $order_id)
                ->update(['status' => 'Success']);
            return redirect('http://localhost:5173/payment-return-success/' . $order_id);
        } else {
            return redirect('http://localhost:5173/payment-return-fault');
        }
    }
    public function sendEmail($order)
    {
        // Gọi event để gửi email
        // $order = 123;
        event(new EventsPaymentSuccessful($order)); // Thay thế tham số event bằng tham số thích hợp


    }
}
