/* eslint-disable no-unused-vars */
import { Button, Spin } from "antd";
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
  const [posterFile, setPosterFile] = useState(null);

  const onCreate = () => {
    setOpen(true);
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
        setPosterFile(null); // Reset state của file ảnh sau khi submit thành công
        setFormData(DEFAULT_MOVIE);
        fetchData();
        setOpen(false);
        setLoading(false);
      });
    } else {
      axios.post("http://127.0.0.1:8000/api/movies", data).then((res) => {
        setPosterFile(null); // Reset state của file ảnh sau khi submit thành công
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
    axios
      .get(`http://127.0.0.1:8000/api/movies/${id}`)
      .then((res) => {
        setFormData(res.data.data);
        setPosterFile(null); // Reset state của file ảnh trước khi mở modal
        setOpen(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      });
  };

  const handleFileChange = (e) => {
    const fileInput = e.target;
    const files = fileInput.files;
    if (files.length > 0) {
      const file = files[0];
      setPosterFile(file); // Set giá trị của posterFile thành file ảnh mới
    }
  };

  return (
    <div>
      <div>
        <Button onClick={onCreate}>New Movie</Button>
      </div>
      {loading ? (
        <Spin size="large" tip="Loading...">
          <TableMovie
            dataSource={dataSource}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </Spin>
      ) : (
        <TableMovie
          dataSource={dataSource}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}

      <ModalMovie
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
        posterFile={posterFile}
        setPosterFile={setPosterFile}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export default FormMovie;
