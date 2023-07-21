import { useState } from "react";
import { ButtonRegister, StyleModal } from "./styled";
import Register from "./Register";
const ModalRegister = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <ButtonRegister type="link" onClick={showModal}>
                ĐĂNG KÍ THÀNH VIÊN
            </ButtonRegister>
            <StyleModal
                title="Vui lòng điền thông tin"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={700}
            >
            <Register/>
            </StyleModal>
        </>
    );
};
export default ModalRegister;
