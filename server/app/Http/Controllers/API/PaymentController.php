<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class PaymentController extends Controller
{
    public function createPayment(Request $request)
    {

        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $orderId = 'ORDER_' . time();
        $amount = $request->totalPrice;
        // $request->totalPrice;

        $vnp_TmnCode = '7O9I976R';
        $vnp_HashSecret = 'EFHJXQJELUELITZBZSIGZEWQOMQMLOPU';
        $vnp_ReturnUrl = 'http://127.0.0.1:8000/api/payment/return';
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
            'vnp_OrderInfo' => 'Thanh toán đơn hàng ' . $orderId,
            "vnp_OrderType" => "other",
            "vnp_ReturnUrl" => $vnp_ReturnUrl,
            'vnp_TxnRef' => $orderId,
            "vnp_ExpireDate" => $expire
        );
        // dd($vnp_Params);
        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }
        // dd($inputData);
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
            $vnpSecureHash =   hash_hmac('sha512', $hashData, $vnp_HashSecret); //  
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        }
        return response()->json(['redirect_url' => $vnp_Url]);
    }

    // Xử lý callback sau khi thanh toán thành công từ VNPAY
    public function handleReturn(Request $request)
    {
        // Xử lý thông tin đơn hàng sau khi thanh toán thành công
        // ...
        $vnp_ResponseCode = $request->input('vnp_ResponseCode');
        // dd($vnp_ResponseCode);
        $vnp_ReturnUrl = 'http://127.0.0.1:8000';
        return response()->json(['vnp_ResponseCode' => $vnp_ResponseCode, 'redirect_url' => $vnp_ReturnUrl]);
    }
}
