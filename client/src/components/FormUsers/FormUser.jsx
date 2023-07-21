/* eslint-disable no-unused-vars */
import { Button } from "antd";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import SearchAdmin from "../SearchBox/SearchAdmin";
import axios from "axios";
import ModalUser from "./ModalUser";


const DEFAULT_USER = {
  name: "",
  gender: "",
  birthday: "",
  email: "",
  password: "",
  phone: "",
  role: "",
  level: "",
};
const FormUser = () => {
  const [formData, setFormData] = useState(DEFAULT_USER);
  // const [keyword, setKeyword] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://127.0.0.1:8000/api/listUser").then((res) => {
      setDataSource(res.data);
    });
  };

  const handleCreate = () => {
    setOpen(true);
  };
  const onSubmit = (id, data) => {
    if (id) {
      axios
        .put(`http://127.0.0.1:8000/api/listUser/${id}`, data)
        .then((res) => {
      
          setFormData(DEFAULT_USER);
          setOpen(false);
          fetchData();
        });
    } else {
      axios.post("http://127.0.0.1:8000/api/listUser", data).then((res) => {
        setFormData(DEFAULT_USER);
        setOpen(false);
        fetchData();
      });
    }
  };

  const onDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/listUser/${id}`).then((res) => {
      fetchData();
    });
  };

  const onEdit = (id) => {
    axios.get(`http://127.0.0.1:8000/api/listUser/${id}`).then((res) => {
        console.log(res.data)
      setFormData(res.data);
      setOpen(true);
      fetchData();
    });
  };
  return (
    <div>
      <div>
        <Button onClick={handleCreate}>New User</Button>
        <SearchAdmin />
      </div>
      <TableUser dataSource={dataSource} onDelete={onDelete} onEdit={onEdit} />

      <ModalUser
        open={open}
        setOpen={setOpen}
        formData={formData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormUser;
