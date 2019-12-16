import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px auto;
`;

const Title = styled.div`
  padding-left: 2%;
  font-size: 25px;
`;

const List = styled.ul`
  margin-left: 10%;
  width: 66%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Item = styled.li`
  border-bottom: solid 1px ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  font-size: 20px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Title>
      <SLink to="/">KOTRAVEL</SLink>
    </Title>
    <List>
      <Item current={pathname === "/tourist?page=1"}>
        <SLink to="/tourist?page=1">Tourist</SLink>
      </Item>
      <Item current={pathname === "/cultural"}>
        <SLink to="/cultural">Cultural</SLink>
      </Item>
      <Item current={pathname === "/festival"}>
        <SLink to="/festival">Festival</SLink>
      </Item>
      <Item current={pathname === "/travelCourse"}>
        <SLink to="/travelCourse">TravelCourse</SLink>
      </Item>
      <Item current={pathname === "/leisure"}>
        <SLink to="/leisure">Leisure</SLink>
      </Item>
      <Item current={pathname === "/rooms"}>
        <SLink to="/rooms">Rooms</SLink>
      </Item>
      <Item current={pathname === "/shopping"}>
        <SLink to="/shopping">Shopping</SLink>
      </Item>
      <Item current={pathname === "/food"}>
        <SLink to="/food">Food</SLink>
      </Item>
    </List>
  </Header>
));
