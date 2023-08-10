import { styled } from "styled-components";
import BGLogin from "../../assets/Auth.jpg";
import { Form } from "antd";

export const Layout = styled.div`
    background-image: url(${BGLogin});
    background-size: contain;
    width: 100%;
    height: 100vh;
`;
export const FormLoginAdmin = styled(Form)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8rem;
    border-radius: 20px;
    background: rgba(209, 209, 209, 0.3);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
