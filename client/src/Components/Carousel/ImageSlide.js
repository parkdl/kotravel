import React from "react";
import styled from "styled-components";

const ImageBox = styled.div`
  background-image: url(${props => props.slideImg});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 500px;
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

export const ImageSlide = ({ imgNum }) => (
  <>
    <ImageBox className="currentImg" slideImg={require(`../../assets/categoryImg/${imgNum}.jpg`)} />

    <Count className="count">{`${imgNum} / 8`}</Count>
  </>
);
