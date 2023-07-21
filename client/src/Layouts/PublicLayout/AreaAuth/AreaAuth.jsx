import { useStateContext } from "../../../Contexts/ContextProvider";
import ModalLogin from "../AreaAuth/ModalRegister/ModalRegister";
import ModalRegister from "../AreaAuth/ModalLogin/ModalLogin";
import { StyleButton } from "./styled";

const AreaAuth = () => {
    const onLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
    };
    const { token } = useStateContext();
    if (token) {
        return (
            <div>
                <StyleButton type="link">THÔNG TIN THÀNH VIÊN</StyleButton>
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
