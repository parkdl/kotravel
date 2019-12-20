import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const RoomsIntro = ({
  accomcount,
  benikia,
  checkintime,
  checkouttime,
  chkcooking,
  foodplace,
  goodstay,
  hanok,
  infocenter,
  parking,
  pickup,
  roomcount,
  reservation,
  reservationurl,
  roomtype,
  scale,
  subfacility,
  barbecue,
  beauty,
  beverage,
  bicycle,
  campfire,
  fitness,
  karaoke,
  publicbath,
  publicpc,
  sauna,
  seminar,
  sports,
  refundregulation
}) => (
  <Container>
    <ItemContainer>
      {accomcount ? <Item>수용가능 인원 : {parse(accomcount)}</Item> : null}
      {benikia ? <Item>베니키아 여부 : {parse(benikia)}</Item> : null}
      {checkintime ? <Item>입실 시간 : {parse(checkintime)}</Item> : null}
      {checkouttime ? <Item>퇴실 시간 : {parse(checkouttime)}</Item> : null}
      {chkcooking ? <Item>객실내 취사 여부 : {parse(chkcooking)}</Item> : null}
      {foodplace ? <Item>식음료장 : {parse(foodplace)}</Item> : null}
      {goodstay ? <Item>굿스테이 여부 : {parse(goodstay)}</Item> : null}
      {hanok ? <Item>한옥 여부 : {parse(hanok)}</Item> : null}
      {infocenter ? <Item>문의 및 안내 : {parse(infocenter)}</Item> : null}
      {parking ? <Item>주차시설 : {parse(parking)}</Item> : null}
      {pickup ? <Item>픽업 서비스 : {parse(pickup)}</Item> : null}
      {roomcount ? <Item>객실 수 : {parse(roomcount)}</Item> : null}
      {reservation ? <Item>예약 안내 : {parse(reservation)}</Item> : null}
      {reservationurl ? <Item>예약 안내 홈페이지 : {parse(reservationurl)}</Item> : null}
      {roomtype ? <Item>객실 유형 : {parse(roomtype)}</Item> : null}
      {scale ? <Item>규모 : {parse(scale)}</Item> : null}
      {subfacility ? <Item>부대시설(기타) : {parse(subfacility)}</Item> : null}
      {barbecue ? <Item>바베큐장 여부 : {parse(barbecue)}</Item> : null}
      {beauty ? <Item>뷰티시설 : {parse(beauty)}</Item> : null}
      {beverage ? <Item>식음료장 : {beverage}</Item> : null}
      {bicycle ? <Item>자전거 대여 : {parse(bicycle)}</Item> : null}
      {campfire ? <Item>캠프파이어 : {parse(campfire)}</Item> : null}
      {fitness ? <Item>휘트니스 센터 : {parse(fitness)}</Item> : null}
      {karaoke ? <Item>노래방 : {parse(karaoke)}</Item> : null}
      {publicbath ? <Item>공동 샤워실 : {parse(publicbath)}</Item> : null}
      {publicpc ? <Item>공동 PC방 : {parse(publicpc)}</Item> : null}
      {sauna ? <Item>사우나실 : {parse(sauna)}</Item> : null}
      {seminar ? <Item>세미나실 : {parse(seminar)}</Item> : null}
      {sports ? <Item>스포츠 시설 : {parse(sports)}</Item> : null}
      {refundregulation ? <Item>환불규정 : {parse(refundregulation)}</Item> : null}
    </ItemContainer>
  </Container>
);

export default RoomsIntro;
