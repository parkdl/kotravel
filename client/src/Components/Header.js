import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px auto;
  justify-content: space-around;
`;

const Title = styled.div`
  font-size: 25px;
`;

const List = styled.ul`
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
      <Item current={pathname === "/cultural?page=1"}>
        <SLink to="/cultural?page=1">Cultural</SLink>
      </Item>
      <Item current={pathname === "/festival?page=1"}>
        <SLink to="/festival?page=1">Festival</SLink>
      </Item>
      <Item current={pathname === "/travelCourse?page=1"}>
        <SLink to="/travelCourse?page=1">TravelCourse</SLink>
      </Item>
      <Item current={pathname === "/leisure?page=1"}>
        <SLink to="/leisure?page=1">Leisure</SLink>
      </Item>
      <Item current={pathname === "/rooms?page=1"}>
        <SLink to="/rooms?page=1">Rooms</SLink>
      </Item>
      <Item current={pathname === "/shopping?page=1"}>
        <SLink to="/shopping?page=1">Shopping</SLink>
      </Item>
      <Item current={pathname === "/food?page=1"}>
        <SLink to="/food?page=1">Food</SLink>
      </Item>
    </List>
  </Header>
));
