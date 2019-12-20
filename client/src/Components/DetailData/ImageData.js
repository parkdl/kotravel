import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.banner});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const ImageData = ({ imgurl }) => (
  <Container>
    <ImageContainer>
      <Image banner={imgurl ? `${imgurl}` : null} />
    </ImageContainer>
  </Container>
);

export default ImageData;
