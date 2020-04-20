import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Languages } from "./Languages";
import { HeaderCategory } from "./HeaderCategory";
import { HeaderAreas } from "./HeaderAreas";
import Search from "./Search";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding-left: 39.91%;
`;

const TitleLink = styled(Link)``;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 100%;
  background-color: #f37720;
  height: 60px;
  position: relative;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin-left: 5%;
  height: 60px;
`;

export default ({ lang, pathname, code, type, area, category, loading }) => (
  <Container>
    <HeaderTop>
      <TitleContainer>
        <TitleLink to={lang ? `${lang}` : ""}>
          <Title>Kotravel</Title>
        </TitleLink>
      </TitleContainer>
      <Search lang={lang} />
    </HeaderTop>
    <Nav>
      <NavContainer>
        <NavList>
          <Languages lang={lang} pathname={pathname} loading={loading} />
          <HeaderCategory
            lang={lang}
            pathname={pathname}
            type={type}
            category={category}
            loading={loading}
          />
          <HeaderAreas lang={lang} pathname={pathname} code={code} area={area} loading={loading} />
        </NavList>
      </NavContainer>
    </Nav>
  </Container>
);
