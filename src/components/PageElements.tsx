import styled from "styled-components";
import { COLOR_DARK } from "../styles";

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
