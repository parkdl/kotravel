import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const ImageBox = styled.div`
  background-image: url(${props => props.slideImg});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  &.currentImg {
    opacity: 1;
    transition: opacity 1s ease-in;
  }
  &.hiddenImg {
    transition: opacity 1s ease-in;
  }
`;

const Count = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  color: white;
  z-index: 1;
  font-weight: bold;
  visibility: hidden;
`;

export const ImageSlide = ({ imgNum, total }) => (
  <Container>
    {total &&
      total.length > 0 &&
      total.map(num =>
        imgNum === num ? (
          <ImageBox
            key={num}
            className={`currentImg ${imgNum}`}
            slideImg={require(`../../assets/categoryImg/${imgNum}.jpg`)}
          />
        ) : (
          <ImageBox
            key={num}
            className={`hiddenImg ${num}`}
            slideImg={require(`../../assets/categoryImg/${num}.jpg`)}
          />
        )
      )}

    <Count className="count">{`${imgNum} / 8`}</Count>
  </Container>
);
