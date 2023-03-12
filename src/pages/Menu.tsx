import React from "react";
import styled from "styled-components";
import { Page } from "../constants/pages";
import { COLOR_DARK, FONT_TITLE } from "../styles";
import { Header, Body, Footer, PageWrapper } from "../components/PageElements";

const Title = styled.div`
  font-family: ${FONT_TITLE};
  font-size: 64px;
  text-align: center;
  color: white;
  font-weight: bold;
`;

const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  justify-content: center;
`;

const MenuItem = styled.button`
  border: none;
  background: none;
  font-family: ${FONT_TITLE};
  font-size: 54px;
  color: ${COLOR_DARK};
  margin: 16px 0;

  :hover {
    cursor: pointer;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 0 16px;
`;

const Author = styled.div`
  color: white;
  text-align: center;
  font-size: 12px;
  margin-top: 16px;
`;

interface MenuProps {
  setPage: (page: Page) => void;
}

const Menu = ({ setPage }: MenuProps) => {
  return (
    <PageWrapper>
      <Header>
        <Title>
          TWO ROOMS and a BOOM
          <br />
          Helper
        </Title>
      </Header>
      <Body>
        <MenuGroup>
          <MenuItem>CARDS</MenuItem>
          <MenuItem onClick={() => setPage(Page.DRAFT)}>DRAFT</MenuItem>
          <MenuItem>PLAYSETS</MenuItem>
          <MenuItem onClick={() => setPage(Page.INSTRUCTIONS)}>
            HOW TO PLAY
          </MenuItem>
        </MenuGroup>
      </Body>
      <Footer>
        <LinkGroup>
          <Link href="https://www.tuesdayknightgames.com/tworoomsandaboom">
            Official Website
          </Link>
          <Link href="#">GitHub</Link>
          <Link href="#">Link Three</Link>
          <Link href="#">Link Four</Link>
        </LinkGroup>
        <Author>Created by Matthew French</Author>
      </Footer>
    </PageWrapper>
  );
};

export default Menu;
