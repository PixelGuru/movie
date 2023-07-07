import { Input } from "antd";
import { styled } from "styled-components";

export const InputSearch = styled(Input.Search)`
    & .ant-input-group > .ant-input:first-child,
    .ant-input-group-addon:first-child {
    border-radius: var(--border-radius1);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background: rgba(85, 80, 80, 0.7);
    border-radius: 20px 0 0 20px;
    height:45px;
    color: #fff;
    font-size: 1.5rem

    }
    & .ant-input-search-button {
    background-color: var(--color-primary);
    border-radius: var(--border-radius1) !important;
    border-radius: 0 20px 20px 0 !important;
    height:45px;
    width:45px;
    background: #fff;
    & .anticon {
        color: var(--color-white)

    }
    &:hover {
        background-color: none;
    }

`;
