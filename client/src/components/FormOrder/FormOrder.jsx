import { useState, useEffect } from "react";
import { Spin } from "antd";
import TableMovie from "./TableOrders";
import axios from "axios";

const FormOrders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true); // Đặt ban đầu là true để hiển thị loading khi component mount

  const fetchData = () => {
    axios.get("http://127.0.0.1:8000/api/order").then((res) => {
      setDataSource(res.data.data);
      setLoading(false); // Khi dữ liệu đã được tải, đặt loading thành false
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spin size="large" tip="Loading...">
          <TableMovie dataSource={dataSource} />
        </Spin>
      ) : (
        <TableMovie dataSource={dataSource} />
      )}
    </div>
  );
};

export default FormOrders;
