import { styled } from "styled-components";

export const Image = styled.img`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  overflow: hidden;
`;
