import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemContainer = styled.div`
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
  top: 200px;
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

const SLink = styled(Link)``;

const path = ["/", "/eng", "/spn", "/jpn", "/rus", "/fre", "/ger", "/chi"];

const lang = [
  ["관광", "문화", "행사", "여행코스", "레져", "숙소", "쇼핑", "음식점"],
  ["Tourist", "Cultural", "Festival", "Traffic", "Leisure", "Rooms", "Shopping", "Food"],
  ["Turístico", "cultural", "festival", "ocio", "habitaciones", "compras", "comida", "tráfico"],
  ["ツーリスト", "文化的な", "祭り", "余暇", "部屋", "ショッピング", "食物", "トラフィック"],
  ["Туристическая", "Культурная", "Фестиваль", "Досуг", "Номера", "Шоппинг", "Еда", "Трафик"],
  [
    "Touristique",
    "Culturelle",
    "Festival",
    "Loisirs",
    "Chambres",
    "Shopping",
    "Nourriture",
    "Circulation"
  ],
  ["Tourist", "Kultur", "Festival", "Freizeit", "Zimmer", "Shopping", "Essen", "Verkehr"],
  ["遊客", "文化", "節日", "休閒", "客房", "購物", "美食", "交通"]
];

export const Category = ({ pathName }) => {
  for (var i = 0; i < path.length; i++) {
    if (pathName === path[i]) {
      return (
        <Container>
          <ItemContainer className="tourist">
            <SLink to={path[i] === path[0] ? "/kor/tourist?page=1" : `${pathName}/tourist?page=1`}>
              <OddTitle>
                <span className="title">{lang[i][0]}</span>
              </OddTitle>
              <ImageContainer>
                <Image bgImage={require("../../assets/2.jpg")} />
              </ImageContainer>
            </SLink>
          </ItemContainer>
          <ItemContainer className="cultural">
            <SLink
              to={path[i] === path[0] ? "/kor/cultural?page=1" : `${pathName}/cultural?page=1`}
            >
              <EvenTitle>
                <span className="title">{lang[i][1]}</span>
              </EvenTitle>
              <ImageContainer className="culturalImage">
                <Image bgImage={require("../../assets/2.jpg")} />
              </ImageContainer>
            </SLink>
          </ItemContainer>
          <ItemContainer className="festival">
            <SLink
              to={path[i] === path[0] ? "/kor/festival?page=1" : `${pathName}/festival?page=1`}
            >
              <OddTitle>
                <span className="title">{lang[i][2]}</span>
              </OddTitle>
              <ImageContainer>
                <Image />
              </ImageContainer>
            </SLink>
          </ItemContainer>

          {lang[i][3] === "여행코스" ? (
            <ItemContainer className="travelCourse">
              <SLink
                to={
                  path[i] === path[0]
                    ? "/kor/travelCourse?page=1"
                    : `${pathName}/travelCourse?page=1`
                }
              >
                <EvenTitle>
                  <span className="title">{lang[i][3]}</span>
                </EvenTitle>
                <ImageContainer>
                  <Image />
                </ImageContainer>
              </SLink>
            </ItemContainer>
          ) : (
            <ItemContainer className="traffic">
              <SLink to={path[i] === path[0] ? "traffic?page=1" : `${pathName}/traffic?page=1`}>
                <EvenTitle>
                  <span className="title">{lang[i][3]}</span>
                </EvenTitle>
                <ImageContainer>
                  <Image />
                </ImageContainer>
              </SLink>
            </ItemContainer>
          )}

          <ItemContainer className="leisure">
            <SLink to={path[i] === path[0] ? "/kor/leisure?page=1" : `${pathName}/leisure?page=1`}>
              <OddTitle>
                <span className="title">{lang[i][4]}</span>
              </OddTitle>
              <ImageContainer>
                <Image />
              </ImageContainer>
            </SLink>
          </ItemContainer>
          <ItemContainer className="rooms">
            <SLink to={path[i] === path[0] ? "/kor/rooms?page=1" : `${pathName}/rooms?page=1`}>
              <EvenTitle>
                <span className="title">{lang[i][5]}</span>
              </EvenTitle>
              <ImageContainer>
                <Image />
              </ImageContainer>
            </SLink>
          </ItemContainer>
          <ItemContainer className="shopping">
            <SLink
              to={path[i] === path[0] ? "/kor/shopping?page=1" : `${pathName}/shopping?page=1`}
            >
              <OddTitle>
                <span className="title">{lang[i][6]}</span>
              </OddTitle>
              <ImageContainer>
                <Image />
              </ImageContainer>
            </SLink>
          </ItemContainer>
          <ItemContainer className="food">
            <SLink to={path[i] === path[0] ? "/kor/food?page=1" : `${pathName}/food?page=1`}>
              <EvenTitle>
                <span className="title">{lang[i][7]}</span>
              </EvenTitle>
              <ImageContainer>
                <Image />
              </ImageContainer>
            </SLink>
          </ItemContainer>
        </Container>
      );
    }
  }
};
