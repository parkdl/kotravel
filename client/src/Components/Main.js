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
        <Content></Content>
      </Container>
    );
  }
}
