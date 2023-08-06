/* eslint-disable no-unused-vars */
import { Button, Spin } from "antd";
import { useEffect, useState } from "react";
import ModalScreeningHCM from "./ModalScreeningHCM";
import axios from "axios";
import TableScreeningHCM from "./TableScreeningHCM";

const DEFAULT_SCREENING = {
  cinema_name: "",
  movie_name: "",
  date_show: "",
  start_time: "",
  end_time: "",
  price: "",
  room: "",
  remaining_seats: "",
};
const FormScreenings = () => {
  const [formData, setFormData] = useState(DEFAULT_SCREENING);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cinemaNames, setCinemaNames] = useState([]);
  const [movieNames, setMovieNames] = useState([]);

  const onCreate = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const fetchData = () => {
    setLoading(true);
    axios.get("http://127.0.0.1:8000/api/screenings").then((res) => {
      setDataSource(res.data.data);
      const data = res.data.data;
      const uniqueCinemaNames = [
        ...new Set(data.map((item) => item.cinema_name)),
      ];
      const uniqueMovieNames = [
        ...new Set(data.map((item) => item.movie_name)),
      ];
      setCinemaNames(uniqueCinemaNames);
      setMovieNames(uniqueMovieNames);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const onEdit = (id) => {
    setLoading(true);
    axios.get(`http://127.0.0.1:8000/api/screenings/${id}`).then((res) => {
      setFormData(res.data.data);
      setOpen(true);
      setLoading(false);
    });
  };
  const onSubmit = (id, data) => {
    setLoading(true);
    if (id) {
      axios
        .put(`http://127.0.0.1:8000/api/screenings/${id}`, data)
        .then((res) => {
          console.log(data);
          setFormData(DEFAULT_SCREENING);
          fetchData();
          setOpen(false);
          setLoading(false);
        });
    } else {
      axios.post("http://127.0.0.1:8000/api/screenings", data).then((res) => {
        setFormData(DEFAULT_SCREENING);
        setOpen(false);
        fetchData();
        setLoading(false);
      });
    }
  };
  const onDelete = (id) => {
    setLoading(true);
    axios.delete(`http://127.0.0.1:8000/api/screenings/${id}`).then((res) => {
      fetchData();
      setLoading(false);
    });
  };
  return (
    <div>
      <Button onClick={onCreate}>New Screening</Button>
      {loading ? (
        <Spin size="large" tip="Loading...">
          <TableScreeningHCM
            dataSource={dataSource}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </Spin>
      ) : (
        <TableScreeningHCM
          dataSource={dataSource}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
      <ModalScreeningHCM
        open={open}
        setOpen={setOpen}
        cinemaNames={cinemaNames}
        movieNames={movieNames}
        onCancel={onCancel}
        onSubmit={onSubmit}
        formData={formData}
      />
    </div>
  );
};

export default FormScreenings;
