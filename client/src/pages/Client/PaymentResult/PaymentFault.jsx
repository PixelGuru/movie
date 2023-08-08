import {  Result } from "antd";

const PaymentFault = () => {
   
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
      <div>Kết quả thanh toán</div>
      <Result status="error" title="Đặt vé không thành công!">
        <div>ádasd</div>
      </Result>
    </div>
  );
};

export default PaymentFault;
