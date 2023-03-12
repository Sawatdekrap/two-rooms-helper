import styled from "styled-components";
import { COLOR_DARK, FONT_TITLE } from "../styles";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  flex: 0;
  background-color: ${COLOR_DARK};
  padding: 32px 0;
`;

export const Body = styled.div`
  flex: auto;
  background-color: white;
`;

export const Footer = styled.div`
  flex: 0;
  background-color: ${COLOR_DARK};
  padding: 32px 0;
`;

export const Title = styled.h1`
  font-family: ${FONT_TITLE};
  font-size: 64px;
  text-align: center;
  color: white;
  font-weight: bold;
`;
