import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: urL(${props => props.bgImage});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.h1`
  font-size: 70px;
  color: white;
  margin-bottom: 30px;
`;

const Nav = styled.button`
  font-size: 50px;
  color: white;
`;

export default () => (
  <Container bgImage={require("../assets/mainImg.jpg")}>
    <Content>
      <Item>환영합니다.</Item>
      <Nav as="a" href="/nav">
        더보기
      </Nav>
    </Content>
  </Container>
);
