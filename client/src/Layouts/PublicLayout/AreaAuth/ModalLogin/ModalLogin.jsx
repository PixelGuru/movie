import { useState } from "react";
import { ButtonLogin, StyleModal } from "./styled";
import LoginMember from "./LoginMember";
const ModalLogin = () => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
 
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <ButtonLogin type="link" onClick={showModal}>
             ĐĂNG NHẬP
            </ButtonLogin>
            <StyleModal
                title="ĐĂNG NHẬP"
                open={open}
                onCancel={handleCancel}
                width={450}
            >
                <LoginMember setOpen={setOpen} />
            </StyleModal>
        </>
    );
};
export default ModalLogin;
