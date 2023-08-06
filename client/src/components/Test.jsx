import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState(100000); // Số tiền thanh toán mặc định

  const handlePayment = async () => {
    try {
      // Gửi yêu cầu tạo mã redirect đến API thanh toán trong Laravel
      const response = await axios.post('http://127.0.0.1:8000/api/create-payment', { amount });

      // Chuyển hướng khách hàng đến cổng thanh toán VNPAY
      window.location.href = response.data.redirect_url;
      console.log(response)
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Thanh toán VNPAY</h1>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Thanh toán</button>
    </div>
  );
};

export default Payment;
