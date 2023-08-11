import { Button } from "antd";
import React from "react";
import axios from "axios"; // Import Axios

const Text = () => {
  const onClick = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/send-email"); // Thay thế đường dẫn bằng API endpoint của bạn
      console.log(response.data); // Hiển thị kết quả trả về từ máy chủ
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
      <Button onClick={onClick}>Send Email</Button>
    </div>
  );
};

export default Text;
