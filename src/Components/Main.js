import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: urL(${props => props.bgImage});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Nav = styled.button`
  &:hover {
    background-color: gray;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-size: 70px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: white;
  height: 40%;
  width: 50%;
`;

export default class extends React.Component {
  state = {
    number: 3,
    error: null
  };

  componentDidMount() {
    try {
      const number = Math.floor(Math.random() * this.state.number + 1);
      this.setState({
        number
      });
      console.log(number);
    } catch {
      this.setState({
        error: "Can`t find image!!"
      });
    }
  }

  render() {
    const { number } = this.state;
    return (
      <Container bgImage={require(`../assets/${number}.jpg`)}>
        <Content>
          <Nav as="a" href="/nav">
            여행지 찾아보기
          </Nav>
        </Content>
      </Container>
    );
  }
}
