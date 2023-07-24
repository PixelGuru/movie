import { styled } from "styled-components";
import BGSession from "../../../assets/pattern.png";
import { Link } from "react-router-dom";

export const Cart = styled.div`
  background-image: url(${BGSession});
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
font-family: 'Anton', sans-serif;
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
