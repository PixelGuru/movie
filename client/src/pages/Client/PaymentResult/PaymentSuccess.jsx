import { Result, Space, Spin } from "antd"; 
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Content, LinkToHome } from "./styled";
import { useStateContext } from "../../../Contexts/ContextProvider";

const PaymentSuccess = () => {
  const { order_id } = useParams();
  const [orderData, setOrderData] = useState({});
  const { user } = useStateContext();
  const [isLoading, setIsLoading] = useState(true); 

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/order/success/${order_id}`
      );
      setOrderData(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching order data:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, [order_id]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(value);
  };

  return (
    <Container>
      {isLoading ? (  
        <Spin size="large" />
      ) : (
        orderData && orderData.user_id === user.id ? (
          <Result status="success" title="Đặt vé thành công!">
            <Content>
              <Space size={8}>
                <b>Mã vé:</b> {orderData.order_id}
              </Space>
              <Space size={8}>
                <b>Ngày đặt</b> {orderData.created_at}
              </Space>
              <Space size={8}>
                <b>Người đặt:</b> {orderData.user_name}
              </Space>
              <Space size={8}>
                <b>Email: </b>
                {orderData.user_email}
              </Space>
              <Space size={8}>
                <b>Số điện thoại: </b>
                {orderData.user_phone}
              </Space>
              <Space size={8}>
                <b>Rạp: </b>
                {orderData.cinema_name}
              </Space>
              <Space size={8}>
                <b>Phim: </b>
                {orderData.movie_name}
              </Space>
              <Space size={8}>
                <b>Ghế đặt: </b>
                {orderData.selected_seats}
              </Space>
              <br />
              <Space size={8}>
                <b>Tổng tiền: </b>
                {formatCurrency(parseFloat(orderData.total_price))}
              </Space>
              <div
                style={{
                  marginTop: "50px",
                  textAlign: "center",
                }}
              >
                <LinkToHome to="/">Trang chủ</LinkToHome>
              </div>
            </Content>
          </Result>
        ) : (
          <Result status="error" title="Không tìm thấy thông tin vé!">
            <LinkToHome to="/">Trang chủ</LinkToHome>
          </Result>
        )
      )}
    </Container>
  );
};

export default PaymentSuccess;
