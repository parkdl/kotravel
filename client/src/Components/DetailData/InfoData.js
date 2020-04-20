import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import noImage from "../../assets/noimage.png";

const ItemContainer = styled.div`
  width: 50%;
`;

const Title = styled.span``;

const Container = styled.div``;

const InfoName = styled.div``;

const InfoText = styled.div``;

const Item = styled.div``;

const ImageContainer = styled.div``;

const Overview = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.banner});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const InfoData = ({ info, path }) => (
  <ItemContainer>
    <Title>반복정보</Title>

    {path === "rooms" && info && info.length > 1 ? (
      info.map(room => (
        <ItemContainer className="rooms" key={room.roomcode}>
          {room.roomtitle ? <Item>{room.roomtitle}</Item> : null}
          {room.roombasecount ? <Item>{room.roombasecount}</Item> : null}
          {room.roommaxcount ? <Item>{room.roommaxcount}</Item> : null}
          {room.roomoffseasonminfee1 ? <Item>{room.roomoffseasonminfee1}</Item> : null}
          {room.roomoffseasonminfee2 ? <Item>{room.roomoffseasonminfee2}</Item> : null}
          {room.roompeakseasonminfee1 ? <Item>{room.roompeakseasonminfee1}</Item> : null}
          {room.roompeakseasonminfee2 ? <Item>{room.roompeakseasonminfee2}</Item> : null}
          {room.roomintro ? <Item>{room.roomintro}</Item> : null}
          {room.roombathfacility ? <Item>{room.roombathfacility}</Item> : null}
          {room.roombath ? <Item>{room.roombath}</Item> : null}
          {room.roomhometheater ? <Item>{room.roomhometheater}</Item> : null}
          {room.roomaircondition ? <Item>{room.roomaircondition}</Item> : null}
          {room.roomtv ? <Item>{room.roomtv}</Item> : null}
          {room.roompc ? <Item>{room.roompc}</Item> : null}
          {room.roomcable ? <Item>{room.roomcable}</Item> : null}
          {room.roominternet ? <Item>{room.roominternet}</Item> : null}
          {room.roomrefrigerator ? <Item>{room.roomrefrigerator}</Item> : null}
          {room.roomtoiletries ? <Item>{room.roomtoiletries}</Item> : null}
          {room.roomsofa ? <Item>{room.roomsofa}</Item> : null}
          {room.roomcook ? <Item>{room.roomcook}</Item> : null}
          {room.roomtable ? <Item>{room.roomtable}</Item> : null}
          {room.roomhairdryer ? <Item>{room.roomhairdryer}</Item> : null}
          {room.roomimg1 ? <Image banner={room.roomimg1} /> : null}
          {room.roomimg2 ? <Image banner={room.roomimg2} /> : null}
          {room.roomimg3 ? <Image banner={room.roomimg3} /> : null}
          {room.roomimg4 ? <Image banner={room.roomimg4} /> : null}
          {room.roomimg5 ? <Image banner={room.roomimg5} /> : null}
        </ItemContainer>
      ))
    ) : path === "rooms" && info && 0 < info.length < 2 ? (
      <ItemContainer className="rooms">
        {info.roomtitle ? <Item>{info.roomtitle}</Item> : null}
        {info.roombasecount ? <Item>{info.roombasecount}</Item> : null}
        {info.roommaxcount ? <Item>{info.roommaxcount}</Item> : null}
        {info.roomoffseasonminfee1 ? <Item>{info.roomoffseasonminfee1}</Item> : null}
        {info.roomoffseasonminfee2 ? <Item>{info.roomoffseasonminfee2}</Item> : null}
        {info.roompeakseasonminfee1 ? <Item>{info.roompeakseasonminfee1}</Item> : null}
        {info.roompeakseasonminfee2 ? <Item>{info.roompeakseasonminfee2}</Item> : null}
        {info.roomintro ? <Item>{info.roomintro}</Item> : null}
        {info.roombathfacility ? <Item>{info.roombathfacility}</Item> : null}
        {info.roombath ? <Item>{info.roombath}</Item> : null}
        {info.roomhometheater ? <Item>{info.roomhometheater}</Item> : null}
        {info.roomaircondition ? <Item>{info.roomaircondition}</Item> : null}
        {info.roomtv ? <Item>{info.roomtv}</Item> : null}
        {info.roompc ? <Item>{info.roompc}</Item> : null}
        {info.roomcable ? <Item>{info.roomcable}</Item> : null}
        {info.roominternet ? <Item>{info.roominternet}</Item> : null}
        {info.roomrefrigerator ? <Item>{info.roomrefrigerator}</Item> : null}
        {info.roomtoiletries ? <Item>{info.roomtoiletries}</Item> : null}
        {info.roomsofa ? <Item>{info.roomsofa}</Item> : null}
        {info.roomcook ? <Item>{info.roomcook}</Item> : null}
        {info.roomtable ? <Item>{info.roomtable}</Item> : null}
        {info.roomhairdryer ? <Item>{info.roomhairdryer}</Item> : null}
        {info.roomimg1 ? <Image banner={info.roomimg1} /> : noImage}
        {info.roomimg2 ? <Image banner={info.roomimg2} /> : noImage}
        {info.roomimg3 ? <Image banner={info.roomimg3} /> : noImage}
        {info.roomimg4 ? <Image banner={info.roomimg4} /> : noImage}
        {info.roomimg5 ? <Image banner={info.roomimg5} /> : noImage}
      </ItemContainer>
    ) : path === "travelCourse" && info && info.length > 1 ? (
      info.map(TravelCourse => (
        <ItemContainer key={TravelCourse.subnum} className="travelCourse">
          <ImageContainer>
            <Image banner={TravelCourse.subdetailimg ? `${TravelCourse.subdetailimg}` : noImage} />
          </ImageContainer>
          <Container>
            <Item>{TravelCourse.subname}</Item>
            <Overview>{TravelCourse.subdetailoverview}</Overview>
          </Container>
        </ItemContainer>
      ))
    ) : path === "travelCourse" && info && 0 < info.length < 2 ? (
      <ItemContainer className="travelCourse">
        <ImageContainer>
          <Image banner={info.subdetailimg ? `${info.subdetailimg}` : noImage} />
        </ImageContainer>
        <Container>
          <Item>{info.subname}</Item>
          <Overview>{info.subdetailoverview}</Overview>
        </Container>
      </ItemContainer>
    ) : info && info.length > 1 ? (
      info.map(infoItem => (
        <Container key={infoItem.serialnum}>
          <InfoName>{infoItem.infoname}</InfoName>
          {infoItem.infotext ? <InfoText>{parse(infoItem.infotext)}</InfoText> : null}
        </Container>
      ))
    ) : info && 0 < info.length < 2 ? (
      <Container>
        <InfoName>{info.infoname}</InfoName>
        {info.infotext ? <InfoText>{parse(info.infotext)}</InfoText> : null}
      </Container>
    ) : null}
  </ItemContainer>
);

export default InfoData;
