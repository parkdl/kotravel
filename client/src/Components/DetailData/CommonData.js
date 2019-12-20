import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

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

const Item = styled.div``;

const CommonData = ({ homepage, firstimage, overview, title, addr1, addr2 }) => (
  <Container>
    <ImageContainer>
      <Image banner={firstimage ? `${firstimage}` : null} />
    </ImageContainer>
    <ItemContainer>
      <Item className="title">{title}</Item>
      <Item className="addr">
        {addr1}
        {addr2}
      </Item>
      <Item className="homepage">{homepage ? parse(homepage) : null}</Item>
      <Item className="overview">{parse(overview)}</Item>
    </ItemContainer>
  </Container>
);

export default CommonData;
