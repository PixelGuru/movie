/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useStateContext } from "../../../Contexts/ContextProvider";

const ModelInfoUser = ({ open, setOpen, userData }) => {
  const { user } = useStateContext();

  const user_id = user.id;

  const [orderData, setOrderData] = useState([]);
  const onCancel = () => {
    setOpen(false);
  };

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/order/${user_id}`
      );
      setOrderData(response.data.data);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, [user_id]);
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(value);
  };
  return (
    <>
      <Modal open={open} onCancel={onCancel} footer={null} width={900}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: 17 }}>
            <div>
              <b>Họ và tên: </b>
              {user?.name}
            </div>
            <div>
              <b>Giới tính:</b> {user?.gender}
            </div>
            <div>
              <b>Ngày sinh:</b> {user?.birthday}
            </div>
            <div>
              <b>Email:</b> {user?.email}
            </div>
            <div>
              <b>Số điện thoại:</b> {user?.phone}
            </div>
            <div>
              <b>Hạng:</b> {user?.level}
            </div>
          </div>
          <div>
            <h4>Lịch sử đặt vé</h4>
            <div
              style={{ maxHeight: "150px", overflowY: "auto", marginTop: 10 }}
            >
              <table border={1} style={{ width: "100%", textAlign: "center" }}>
                <thead>
                  <tr>
                    <th>Ngày đặt</th>
                    <th>Phim</th>
                    <th>Ghế đã đặt</th>
                    <th>Giá vé</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.map((order) => (
                    <tr key={order.order_id}>
                      <td style={{ padding: 5 }}>{order.created_at}</td>
                      <td style={{ padding: 5 }}>{order.movie_name}</td>
                      <td>{order.selected_seats}</td>
                      <td style={{ padding: 5 }}>
                        {formatCurrency(parseFloat(order.total_price))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModelInfoUser;
