import React from "react";
import styled from "styled-components";
import { ImageSlide } from "./ImageSlide";
import { Arrow } from "./Arrow";

const Container = styled.div`
  width: 100%;
  position: relative;
  .right {
    left: 1055px;
  }
  &:hover {
    .count {
      visibility: visible;
    }
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.prop = {
      number: 8
    };
    this.state = {
      currentImageIndex: 1
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide = () => {
    const lastIndex = this.prop.number;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 1;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = this.prop.number;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 1 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  /*componentDidMount() {
    setInterval(this.nextSlide, 5000);
  }*/

  render() {
    return (
      <Container className="carousel">
        <Arrow direction="left" clickFunction={this.previousSlide} icon="&#9664;" />

        <ImageSlide imgNum={this.state.currentImageIndex} />

        <Arrow direction="right" clickFunction={this.nextSlide} icon="&#9654;" />
      </Container>
    );
  }
}
