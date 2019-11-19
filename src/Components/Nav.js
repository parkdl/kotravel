import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/tourist"}>
        <SLink to="/tourist">관광지</SLink>
      </Item>
      <Item current={pathname === "/cultural"}>
        <SLink to="/cultural">문화시설</SLink>
      </Item>
      <Item current={pathname === "/festival"}>
        <SLink to="/festival">행사</SLink>
      </Item>
      <Item current={pathname === "/travelCourse"}>
        <SLink to="/travelCourse">여행코스</SLink>
      </Item>
      <Item current={pathname === "/leisure"}>
        <SLink to="/leisure">레포츠</SLink>
      </Item>
      <Item current={pathname === "/rooms"}>
        <SLink to="/rooms">숙박</SLink>
      </Item>
      <Item current={pathname === "/shopping"}>
        <SLink to="/shopping">쇼핑</SLink>
      </Item>
      <Item current={pathname === "/food"}>
        <SLink to="/food">음식점</SLink>
      </Item>
    </List>
  </Header>
));
