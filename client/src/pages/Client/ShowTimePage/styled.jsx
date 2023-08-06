import { Button } from "antd";
import { styled } from "styled-components";

export const AreaChoseCinema = styled.div`
  height: 700px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 0 auto;
  padding-top: 50px;
`;
export const StyleButtonChose = styled(Button)`
  font-size: 26px;
  width: 246px;
  height: 52px;
  border-radius: 10px;
  &:hover {
    background-color: #f37520;
    color: #fff !important;
    border-color: #fff !important ;
  }
`;
export const StyleButtonChoseTime = styled(Button)`
  color: #fff;
  background: #f37520;
  border: none;
  transition: 0.5s;
  &:hover {
    background-color: #e00d7a;
    color: #fff !important;
    border-color: #fff !important ;
  }
`;
