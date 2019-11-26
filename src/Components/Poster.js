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

const Address = styled.div``;

const Title = styled.div``;

const SubTilte = styled.div``;

const Poster = ({ imageUrl, addr1, addr2, title = false }) => (
  <Container>
    <ImageContainer>
      <Image bgUrl={imageUrl ? `${imageUrl}` : null} />
    </ImageContainer>
    <Address>
      <Title></Title>
      <SubTilte></SubTilte>
    </Address>
  </Container>
);

export default Poster;
