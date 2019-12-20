import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const TouristIntro = ({
  chkcreditcard,
  discountinfo,
  firstmenu,
  infocenter,
  kidsfacility,
  opentime,
  packing,
  parking,
  reservation,
  restdate,
  scale,
  seat,
  smoking,
  treatmenu
}) => (
  <Container>
    <ItemContainer>
      {chkcreditcard ? <Item>신용카드 가능 유무 : {parse(chkcreditcard)}</Item> : null}
      {discountinfo ? <Item>할인정보 : {parse(discountinfo)}</Item> : null}
      {firstmenu ? <Item>대표메뉴 : {parse(firstmenu)}</Item> : null}
      {infocenter ? <Item>문의 및 안내 : {parse(infocenter)}</Item> : null}
      {kidsfacility ? <Item>어린이 놀이방 유무 : {parse(kidsfacility)}</Item> : null}
      {opentime ? <Item>영업시간 : {parse(opentime)}</Item> : null}
      {packing ? <Item>포장가능 : {parse(packing)}</Item> : null}
      {parking ? <Item>주차시설 : {parse(parking)}</Item> : null}
      {reservation ? <Item>예약안내 : {parse(reservation)}</Item> : null}
      {restdate ? <Item>쉬는날 : {parse(restdate)}</Item> : null}
      {scale ? <Item>규모 : {parse(scale)}</Item> : null}
      {seat ? <Item>좌석수 : {parse(seat)}</Item> : null}
      {smoking ? <Item>금연 / 흡연 여부 : {parse(smoking)}</Item> : null}
      {treatmenu ? <Item>취급메뉴 : {parse(treatmenu)}</Item> : null}
    </ItemContainer>
  </Container>
);

export default TouristIntro;
