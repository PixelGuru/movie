/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Modal } from "antd";
import { useStateContext } from "../../../Contexts/ContextProvider";

const ModelInfoUser = ({ open, setOpen, userData }) => {
  const { user } = useStateContext();
  // console.log(user);
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Thông tin thành viên"
        open={open}
        setOpen={setOpen}
        onCancel={onCancel}
      >
        <div style={{ fontSize: 17 }}>
          <div>
            <b>Họ và tên: </b>
            {user?.name}
          </div>
          <div>
            <b>Giới tính:</b> {user?.gender}
          </div>
          <div>
            <b>Ngày sinh:</b> {user?.birthday}
          </div>
          <div>
            <b>Email:</b> {user?.email}
          </div>
          <div>
            <b>Số điện thoại:</b> {user?.phone}
          </div>
          <div>
            <b>Hạng:</b> {user?.level}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModelInfoUser;
