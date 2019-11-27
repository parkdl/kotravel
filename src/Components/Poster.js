import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 22.75%;
  margin: 3%;
`;

const ImageContainer = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const ItemContainer = styled.div``;

const Title = styled.div`
  margin: 10px 0;
`;

const Address = styled.div``;

const Poster = ({ imageUrl, addr, subAddr, title = false }) => (
  <Container>
    <ImageContainer>
      <Image bgUrl={imageUrl ? `${imageUrl}` : require("../assets/noimage.png")} />
    </ImageContainer>
    <ItemContainer>
      <Title>{title}</Title>
      <Address>
        {addr}
        {subAddr}
      </Address>
    </ItemContainer>
  </Container>
);

export default Poster;
