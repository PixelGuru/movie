import { useState } from "react";
import { ButtonLogin, StyleModal } from "./styled";
import Login from "./Login";
const ModalLogin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
 
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <ButtonLogin type="link" onClick={showModal}>
                Login
            </ButtonLogin>
            <StyleModal
                title="Login"
                open={isModalOpen}
                onCancel={handleCancel}
                width={450}
            >
                <Login />
            </StyleModal>
        </>
    );
};
export default ModalLogin;
