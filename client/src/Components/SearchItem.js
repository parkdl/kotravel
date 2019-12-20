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

const item = {
  typeNum: [12, 14, 15, 25, 28, 32, 38, 39],
  path: [
    "/tourist",
    "/cultural",
    "/festival",
    "/travelCourse",
    "/leisure",
    "/rooms",
    "/shopping",
    "/food"
  ]
};

const typeLink = (typeId, id) => {
  for (var i = 0; i < item.typeNum.length; i++) {
    if (typeId === item.typeNum[i]) {
      return `${item.path[i]}/${id}`;
    }
  }
};

const SearchItem = ({ id, type, imageUrl, title, addr, subAddr }) => (
  <Container to={typeLink(type, id)}>
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

export default SearchItem;
