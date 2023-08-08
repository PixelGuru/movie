<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\order;
use Illuminate\Http\Request;


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
        $expire = date('YmdHis', strtotime('+15 minutes', strtotime($startTime)));

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

        );
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
        }
        // dd($orderData);
        // Trả về response chứa redirect_url và orderData
        return response()->json(['redirect_url' => $vnp_Url, ]);
    }

    public function handleReturn(Request $request)
    {
        if ($request->vnp_ResponseCode === '00') {
            return redirect('http://localhost:5173/payment-return-success');
        }
        return redirect('http://localhost:5173/payment-return-fault');
    }
}
