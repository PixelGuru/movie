import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  color: #000;
  width: 40%;
  background: #fff;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
`;

export const Content = styled.div`
  width: 50%;
  text-align: start;
  margin: 0 auto;
  font-size: 15px;
  line-height: 1.5rem;
`;

export const LinkToHome = styled(Link)`
  margin-top: 50px;
  background: #e00d7a;
  padding: 10px 10px;
  border-radius: 10px;
  color: #fff;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background: #f37520;
  }
`;
