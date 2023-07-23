/* eslint-disable no-unused-vars */
import { Button, Spin } from "antd"; // Import Spin component from Ant Design
import SearchAdmin from "../SearchBox/SearchAdmin";
import TableMovie from "./TableMovie";
import { useEffect, useState } from "react";
import ModalMovie from "./ModalMovie";
import axios from "axios";

const DEFAULT_MOVIE = {
  name: "",
  genre: "",
  duration: "",
  actor: "",
  director: "",
  content: "",
  posters: "",
  status: "",
};

const FormMovie = () => {
  const [formData, setFormData] = useState(DEFAULT_MOVIE);
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
    axios.get("http://127.0.0.1:8000/api/movies").then((res) => {
      setDataSource(res.data.data);
      setLoading(false); 
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (id, data) => {
    setLoading(true); 
    if (id) {
      axios.put(`http://127.0.0.1:8000/api/movies/${id}`, data).then((res) => {
        console.log(data);
        setFormData(DEFAULT_MOVIE);
        fetchData();
        setOpen(false);
        setLoading(false); 
      });
    } else {
      axios.post("http://127.0.0.1:8000/api/movies", data).then((res) => {
        setFormData(DEFAULT_MOVIE);
        setOpen(false);
        fetchData();
        setLoading(false); 
      });
    }
  };

  const onDelete = (id) => {
    setLoading(true); 
    axios.delete(`http://127.0.0.1:8000/api/movies/${id}`).then((res) => {
      fetchData();
      setLoading(false); 
    });
  };

  const onEdit = (id) => {
    setLoading(true); 
    axios.get(`http://127.0.0.1:8000/api/movies/${id}`).then((res) => {
      setFormData(res.data.data);
      setOpen(true);
      setLoading(false); 
    });
  };

  return (
    <div>
      <div>
        <Button onClick={onCreate}>New Movie</Button>
      </div>
      {/* Display the Spin component when loading is true */}
      {loading ? (
        <Spin size="large" tip="Loading...">
          <TableMovie dataSource={dataSource} onDelete={onDelete} onEdit={onEdit} />
        </Spin>
      ) : (
        <TableMovie dataSource={dataSource} onDelete={onDelete} onEdit={onEdit} />
      )}

      <ModalMovie
        open={open}
        setOpen={setOpen}
        onCancel={onCancel}
        onSubmit={onSubmit}
        formData={formData}
      />
    </div>
  );
};

export default FormMovie;
