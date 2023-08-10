import { BackTop } from "antd";
import { styled } from "styled-components";

export const StyledBackTop = styled(BackTop)`
  & .ant-back-top-content {
    width: 50px;
    height: 50px;
    overflow: hidden;
    color: #fff;
    text-align: center;
    background-color: rgb(233 76 19 / 45%);
    border-radius: 40px;
    transition: all 0.2s;
  }
`;
