import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemContainer = styled.div`
  background-color: gray;
  width: 530px;
  height: 300px;
  margin-bottom: 10px;
  position: relative;
  border-radius: 4px;
`;

const OddTitle = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: black;
  color: white;
`;

const EvenTitle = styled.div`
  width: 200px;
  height: 100px;
  background-color: black;
  color: white;
  position: absolute;
  left: 330px;
`;

const ImageContainer = styled.div`
  width: 320px;
  position: absolute;
  left: 210px;
  z-index: 2;
  &.culturalImage {
    left: 0px;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.bgImage});
  height: 300px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
`;

export default class extends React.Component {
  render() {
    return (
      <Container>
        <ItemContainer className="tourist">
          <OddTitle>
            <span className="title">Tourist</span>
          </OddTitle>
          <ImageContainer>
            <Image bgImage={require("../../assets/2.jpg")} />
          </ImageContainer>
        </ItemContainer>
        <ItemContainer className="cultural">
          <EvenTitle>
            <span className="title">Cultural</span>
          </EvenTitle>
          <ImageContainer className="culturalImage">
            <Image bgImage={require("../../assets/2.jpg")} />
          </ImageContainer>
        </ItemContainer>
        <ItemContainer className="festival">
          <OddTitle>
            <span className="title">Festival</span>
          </OddTitle>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </ItemContainer>
        <ItemContainer className="travelCourse">
          <EvenTitle>
            <span className="title">Travel Course</span>
          </EvenTitle>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </ItemContainer>
        <ItemContainer className="leisure">
          <OddTitle>
            <span className="title">Leisure</span>
          </OddTitle>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </ItemContainer>
        <ItemContainer className="rooms">
          <EvenTitle>
            <span className="title">Rooms</span>
          </EvenTitle>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </ItemContainer>
        <ItemContainer className="shopping">
          <OddTitle>
            <span className="title">Shopping</span>
          </OddTitle>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </ItemContainer>
        <ItemContainer className="food">
          <EvenTitle>
            <span className="title">Food</span>
          </EvenTitle>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </ItemContainer>
      </Container>
    );
  }
}
