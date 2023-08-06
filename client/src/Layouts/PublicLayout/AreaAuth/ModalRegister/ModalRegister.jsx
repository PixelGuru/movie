import { useState } from "react";
import { ButtonRegister, StyleModal } from "./styled";
import Register from "./Register";
const ModalRegister = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <ButtonRegister type="link" onClick={showModal}>
        ĐĂNG KÍ THÀNH VIÊN
      </ButtonRegister>
      <StyleModal
        title="Vui lòng điền thông tin"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <Register open={open} setOpen={setOpen} />
      </StyleModal>
    </>
  );
};
export default ModalRegister;
