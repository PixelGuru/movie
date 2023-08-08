import { Result } from "antd";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [formDataOrder, setFormDataOrder] = useState(null);
  const [dataSent, setDataSent] = useState(false);
console.log(formDataOrder)
  const sendFormData = useCallback(() => {
    if (formDataOrder) {
      axios
        .post("http://127.0.0.1:8000/api/order", formDataOrder)
        .then((response) => {
          console.log("Đã gửi dữ liệu thành công:", response.data);
          setDataSent(true);
          sessionStorage.removeItem("orderData");
        })
        .catch((error) => {
          console.error("Lỗi khi gửi dữ liệu:", error);
        });
    }
  }, [formDataOrder]);

  useEffect(() => {
    const storedOrderData = sessionStorage.getItem("orderData");
    if (storedOrderData) {
      const parsedOrderData = JSON.parse(storedOrderData);
      setFormDataOrder(parsedOrderData);
    }
  }, []);

  useEffect(() => {
    if (!dataSent) {
      sendFormData();
    }
  }, [dataSent, sendFormData]);

  return (
    <div
      style={{
        color: "#000",
        width: "50%",
        background: "#fff",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {formDataOrder ? (
        <Result status="success" title="Đặt vé thành công!">
          <div>
            <p>Người đặt: {formDataOrder.user_name}</p>
            <p>Email: {formDataOrder.user_email} </p>
            <p>Rạp: {formDataOrder.cinema_name}</p>
            <p>Phim: {formDataOrder.movie_name}</p>
            <p>Ghế đặt: {formDataOrder.selected_seats}</p>
            <p>Tổng tiền: {formDataOrder.total_price} VNĐ</p>
          </div>
        </Result>
      ) : (
        <Result status="warning">
          <Link to="/">Trang chủ</Link>
        </Result>
      )}
    </div>
  );
};

export default PaymentSuccess;
