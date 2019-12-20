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

const ItemContainer = styled.div``;

const Name = styled.div``;

const Overview = styled.div``;

const TravelCourseInfo = ({ detailimg, detailoverview, name }) => (
  <Container>
    <ImageContainer>
      <Image banner={detailimg ? `${detailimg}` : null} />
    </ImageContainer>
    <ItemContainer>
      <Name>{name}</Name>
      <Overview>{detailoverview}</Overview>
    </ItemContainer>
  </Container>
);

export default TravelCourseInfo;
