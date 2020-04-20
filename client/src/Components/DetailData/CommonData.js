import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.banner});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  &.title {
    padding: 0 auto;
  }
`;

const CommonData = ({ homepage, firstimage, overview, title, addr1, addr2 }) => (
  <Container>
    <ItemContainer>
      <Item className="title">{title}</Item>
      <Item className="addr">
        {addr1}
        {addr2}
      </Item>
    </ItemContainer>
    <ImageContainer>
      <Image banner={firstimage ? `${firstimage}` : null} />
    </ImageContainer>
    <ItemContainer>
      <span>기본 정보</span>
      <Item className="homepage">{homepage ? parse(homepage) : null}</Item>
      <Item className="overview">{parse(overview)}</Item>
    </ItemContainer>
  </Container>
);

export default CommonData;
