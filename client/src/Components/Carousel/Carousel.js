import React from "react";
import styled from "styled-components";
import { ImageSlide } from "./ImageSlide";
import ChangeImg from "./ChangeImg";

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  &:hover {
    .count {
      visibility: visible;
    }
    .changeImg {
      visibility: visible;
    }
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.handleClickChangeBtn = this.handleClickChangeBtn.bind(this);
  }

  nextSlide = () => {
    const lastIndex = this.props.image.length;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  /*componentDidMount() {
    setInterval(this.nextSlide, 5000);
  }*/

  handleClickChangeBtn = event => {
    const changeIndex = parseInt(event.target.id);
    const { currentImageIndex } = this.state;
    const compareIndex = currentImageIndex !== changeIndex;
    const index = compareIndex ? changeIndex : null;

    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    const { image } = this.props;
    const { currentImageIndex } = this.state;

    return (
      <Container className="carousel">
        <ImageSlide imgNum={currentImageIndex} total={image} />
        <ChangeImg total={image} imgNum={currentImageIndex} click={this.handleClickChangeBtn} />
      </Container>
    );
  }
}
