import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  &::before {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.9);
    height: 100%;
    left: 0;
    opacity: 0.75;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  color: white;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  flex-wrap: wrap;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  width: 22.75%;
  margin: 1%;
  background-size: cover;
  background-position: center center;
  hwidth: 100%;
  border-radius: 30px;
  &.tourist {
    background-image: url(${props => props.tourist});
  }
  &.cultural {
    background-image: url(${props => props.cultural});
  }
  &.festival {
    background-image: url(${props => props.festival});
  }
  &.leisure {
    background-image: url(${props => props.leisure});
  }
  &.course {
    background-image: url(${props => props.course});
  }
  &.shopping {
    background-image: url(${props => props.shopping});
  }
  &.rooms {
    background-image: url(${props => props.rooms});
  }
  &.food {
    background-image: url(${props => props.food});
  }
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 80%;
  z-index: 4;
  font-size: 30px;
  font-weight: bold;
  span {
    visibility: hidden;
  }
  &:hover {
    background-color: gray;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    span {
      visibility: visible;
    }
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Nav bgImage={require("../assets/1.jpg")}>
    <List>
      <Item
        current={pathname === "/tourist"}
        tourist={require("../assets/navImg/tourist.jpg")}
        className="tourist"
      >
        <SLink to="/tourist">
          <span className="title">관광지</span>
        </SLink>
      </Item>
      <Item
        current={pathname === "/cultural"}
        cultural={require("../assets/navImg/cultural.jpg")}
        className="cultural"
      >
        <SLink to="/cultural">
          <span className="title">문화시설</span>
        </SLink>
      </Item>
      <Item
        current={pathname === "/festival"}
        festival={require("../assets/navImg/festival.jpg")}
        className="festival"
      >
        <SLink to="/festival">
          <span className="title">행사</span>
        </SLink>
      </Item>
      <Item
        current={pathname === "/travelCourse"}
        course={require("../assets/navImg/course.jpg")}
        className="course"
      >
        <SLink to="/travelCourse">
          <span className="title">여행코스</span>
        </SLink>
      </Item>
      <Item
        current={pathname === "/leisure"}
        leisure={require("../assets/navImg/leisure.jpeg")}
        className="leisure"
      >
        <SLink to="/leisure">
          <span className="title">레포츠</span>
        </SLink>
      </Item>
      <Item
        current={pathname === "/rooms"}
        rooms={require("../assets/navImg/rooms.png")}
        className="rooms"
      >
        <SLink to="/rooms">
          <span className="title">숙박</span>
        </SLink>
      </Item>
      <Item
        current={pathname === "/shopping"}
        shopping={require("../assets/navImg/shopping.jpg")}
        className="shopping"
      >
        <SLink to="/shopping">
          <span className="title">쇼핑</span>
        </SLink>
      </Item>
      <Item
        current={pathname === "/food"}
        food={require("../assets/navImg/food.jpg")}
        className="food"
      >
        <SLink to="/food">
          <span className="title">음식점</span>
        </SLink>
      </Item>
    </List>
  </Nav>
));
