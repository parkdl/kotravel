import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const FestivalIntro = ({
  agelimit,
  bookingplace,
  discountinfo,
  eventenddate,
  eventhomepage,
  eventplace,
  eventstartdate,
  festivalgrade,
  placeinfo,
  playtime,
  program,
  spendtime,
  sponsor1,
  sponsor1tel,
  sponsor2,
  sponsor2tel,
  subevent,
  usefee
}) => (
  <Container>
    <ItemContainer>
      {agelimit ? <Item>관람 가능연령 : {parse(agelimit)}</Item> : null}
      {bookingplace ? <Item>예매처 : {parse(bookingplace)}</Item> : null}
      {discountinfo ? <Item>할인정보 : {parse(discountinfo)}</Item> : null}
      {eventhomepage ? <Item>행사 홈페이지{parse(eventhomepage)}</Item> : null}
      {eventplace ? <Item>행사 장소 : {parse(eventplace)}</Item> : null}
      {eventstartdate ? <Item>행사 시작일 : {eventstartdate}</Item> : null}
      {eventenddate ? <Item>행사 종료일 : {eventenddate}</Item> : null}
      {festivalgrade ? <Item>축제등급 : {parse(festivalgrade)}</Item> : null}
      {placeinfo ? <Item>행사장 위치안내{parse(placeinfo)}</Item> : null}
      {playtime ? <Item>공연시간 : {parse(playtime)}</Item> : null}
      {program ? <Item>행사 프로그램 : {parse(program)}</Item> : null}
      {spendtime ? <Item>관람 소요시간 : {parse(spendtime)}</Item> : null}
      {sponsor1 ? <Item>주최자 정보 : {parse(sponsor1)}</Item> : null}
      {sponsor1tel ? <Item>주최자 연락처 : {parse(sponsor1tel)}</Item> : null}
      {sponsor2 ? <Item>주관사 정보 : {parse(sponsor2)}</Item> : null}
      {sponsor2tel ? <Item>주관사 연락처 : {parse(sponsor2tel)}</Item> : null}
      {subevent ? <Item>부대행사 : {parse(subevent)}</Item> : null}
      {usefee ? <Item>이용요금 : {parse(usefee)}</Item> : null}
    </ItemContainer>
  </Container>
);

export default FestivalIntro;
