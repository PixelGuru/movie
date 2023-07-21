import { Button, Collapse, Modal } from "antd";
import { styled } from "styled-components";

export const StyledButton = styled(Button)`
    color: #b3c4d5;
    font-size: 1.2rem;
    &:hover {
       color: #f37520 !important;
`;

export const StyleModal = styled(Modal)`
    & .ant-modal-footer {
        display: none;
    }
    & .ant-modal-content {
        height: 90vh;
        overflow: auto;
        border-radius: 10px;
    }
`;
export const ContentPolicy = styled.div`
    font-size: 15px;
    margin-top: 10px;
`;

export const StyleCollapse = styled(Collapse)`
font-size: 16px;
    & .ant-collapse-header-text{
        font-weight: 700;
    }
`;
