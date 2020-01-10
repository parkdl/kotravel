import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
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

const Poster = ({
  id,
  path,
  imageUrl,
  addr,
  subAddr,
  title,
  isTourist,
  isCultural,
  isFestival,
  isFood,
  isRooms,
  isLeisure,
  isShopping,
  isTraffic = false
}) => (
  <Container
    to={
      isTourist
        ? `${path}/${id}`
        : isCultural
        ? `${path}/${id}`
        : isFestival
        ? `${path}/${id}`
        : isFood
        ? `${path}/${id}`
        : isRooms
        ? `${path}/${id}`
        : isLeisure
        ? `${path}/${id}`
        : isShopping
        ? `${path}/${id}`
        : isTraffic
        ? `${path}/${id}`
        : `${path}/${id}`
    }
  >
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
