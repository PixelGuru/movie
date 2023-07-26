/* eslint-disable no-unused-vars */
import { Button, Spin } from "antd";
import { useEffect, useState } from "react";
import ModalscreeningDN from "./ModalScreeningDN";
import axios from "axios";

import TableScreeningDN from "./TableScreeningDN";

const DEFAULT_SCREENING = {
  movie_name: "",
  date_show: "",
  start_time: "",
  end_time: "",
  price: "",
  remaining_seats: "",
};
const DaNang = () => {
  const [formData, setFormData] = useState(DEFAULT_SCREENING);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCreate = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const fetchData = () => {
    setLoading(true);
    axios.get("http://127.0.0.1:8000/api/screeningDN").then((res) => {
      setDataSource(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const onEdit = (id) => {
    setLoading(true);
    axios.get(`http://127.0.0.1:8000/api/screeningDN/${id}`).then((res) => {
      setFormData(res.data.data);
      setOpen(true);
      setLoading(false);
    });
  };
  const onSubmit = (id, data) => {
    setLoading(true);
    if (id) {
      axios.put(`http://127.0.0.1:8000/api/screeningDNs/${id}`, data).then((res) => {
        console.log(data);
        setFormData(DEFAULT_SCREENING);
        fetchData();
        setOpen(false);
        setLoading(false);
      });
    } else {
      axios.post("http://127.0.0.1:8000/api/screeningDN", data).then((res) => {
        setFormData(DEFAULT_SCREENING);
        setOpen(false);
        fetchData();
        setLoading(false);
      });
    }
  };
  const onDelete = (id) => {
    setLoading(true);
    axios.delete(`http://127.0.0.1:8000/api/screeningDN/${id}`).then((res) => {
      fetchData();
      setLoading(false);
    });
  };
  return (
    <div>
      <Button onClick={onCreate}>New Screening</Button>
      {loading ? (
        <Spin size="large" tip="Loading...">
          <TableScreeningDN
            dataSource={dataSource}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </Spin>
      ) : (
        <TableScreeningDN
          dataSource={dataSource}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
      <ModalscreeningDN
        open={open}
        setOpen={setOpen}
        onCancel={onCancel}
        onSubmit={onSubmit}
        formData={formData}
      />
    </div>
  );
};

export default DaNang;
