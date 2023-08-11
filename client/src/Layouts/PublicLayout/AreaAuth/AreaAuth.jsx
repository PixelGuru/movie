import ModalLogin from "../AreaAuth/ModalLogin/ModalLogin";
import ModalRegister from "../AreaAuth/ModalRegister/ModalRegister";
import { StyleButton } from "./styled";
import { useState } from "react";
import ModelInfoUser from "./ModelInfoUser";
import { useNavigate } from "react-router-dom";

const AreaAuth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const onLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  const onClick = () => {
    setOpen(true);
  };

  if (token && token !== null) {
    return (
      <div>
        <StyleButton onClick={onClick} type="link">
          THÔNG TIN THÀNH VIÊN
        </StyleButton>
        <ModelInfoUser open={open} setOpen={setOpen} />
        <StyleButton type="link" onClick={onLogout}>
          ĐĂNG XUẤT
        </StyleButton>
      </div>
    );
  } else {
    return (
      <div>
        <ModalRegister />
        <ModalLogin />
      </div>
    );
  }
};

export default AreaAuth;
