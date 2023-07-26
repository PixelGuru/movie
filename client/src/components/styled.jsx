import { styled } from "styled-components";
// import BGSession from "../../../assets/pattern.png";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const Cart = styled.div`
  // background-image: url(${BGSession});
  height: auto;
  background-repeat: none;
`;
export const Content = styled.div`
  width: 100%;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;
export const Li = styled.ul`
  list-style: none;
  padding: 20px 0;
`;

export const StyleLink = styled(Link)`
  font-family: "Anton", sans-serif;
  font-weight: 600;
  font-size: 30px;
  text-transform: uppercase;
  color: #fff;
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 74px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  padding: 0 30px;
  text-align: right;
  &:hover {
    color: #f37520 !important;
  }
`;

export const StyledButton = styled(Button)`
  background: #e00d7a;
  color: #fff;
  border: none;
  font-size: 15px;
  &:hover {
    background: #f37737;
    color: #fff !important;
  }
`;
export const StyledCarousel = styled.div`
  background: rgb(26 0 22 / 40%);
  position: relative;
`;
export const Next = styled.a`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: #f37635;
  }
`;

export const Pre = styled.a`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  font-size: 3rem;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: #f37635;
  }
`;
