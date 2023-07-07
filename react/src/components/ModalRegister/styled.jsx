import { Button, Modal } from "antd";
import { styled } from "styled-components";
import BGAuth from "../../assets/Auth.jpg";

export const ButtonRegister = styled(Button)`
    color: #fff;
    font-size: 17px;
    &:hover {
        color: #f37520 !important;
    }
`;

export const StyleModal = styled(Modal)`
    & .anticon {
        color: #fff;
    }
    & .ant-modal-header {
        background: none;
    }
    & .ant-modal-content {
        background-image: url(${BGAuth});
        background-size: contain;
        padding: 70px 50px;
    }
    & .ant-modal-title {
        text-align: center;
        font-size: 40px;
        margin-bottom: 50px;
        background: none;
        color: #fff;
    }
    & .ant-modal-footer {
        display: none;
    }
    & .ant-modal-body {
        display: flex;
        justify-content: center;
    }
`;
