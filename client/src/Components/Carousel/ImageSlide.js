import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  background-image: url(${props => props.slideImg});
  background-size: cover;
  background-position: center center;
  width: 90%;
  height: 100%;
  position: absolute;
  z-index: 1;
  opacity: 0;
  left: 5%;
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
  right: 7%;
  color: white;
  z-index: 1;
  font-weight: bold;
  visibility: hidden;
`;

export const ImageSlide = ({ imgNum, total }) => (
  <Container>
    {total && total.length > 1 ? (
      total.map((num, i) =>
        imgNum === i ? (
          <ImageBox key={i} className={`currentImg ${i}`} slideImg={num.originimgurl} />
        ) : (
          <ImageBox key={i} className={`hiddenImg ${i}`} slideImg={num.originimgurl} />
        )
      )
    ) : (
      <ImageBox className="currentImg" slideImg={total.originimgurl} />
    )}

    {total && total.length > 1 ? (
      <Count className="count">{`${parseInt(imgNum) + 1} / ${total.length}`}</Count>
    ) : (
      <Count className="count">{1 / 1}</Count>
    )}
  </Container>
);
