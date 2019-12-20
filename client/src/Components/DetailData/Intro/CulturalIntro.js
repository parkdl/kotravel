import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const CulturalIntro = ({
  count,
  babycarriage,
  creditcard,
  pet,
  infocenter,
  parking,
  restdate,
  usetime,
  parkingfee,
  scale,
  spendtime,
  discountinfo,
  usefee
}) => (
  <Container>
    <ItemContainer>
      {count ? <Item>수용인원 : {parse(count)}</Item> : null}
      {babycarriage ? <Item>유모자 대여 정보 : {parse(babycarriage)}</Item> : null}
      {creditcard ? <Item>신용카드 가능 유무 : {parse(creditcard)}</Item> : null}
      {pet ? <Item>애완동물 동반 : {parse(pet)}</Item> : null}
      {discountinfo ? <Item>할인정보 : {parse(discountinfo)}</Item> : null}
      {infocenter ? <Item>문의 및 안내 : {parse(infocenter)}</Item> : null}
      {parking ? <Item>주차시설 : {parse(parking)}</Item> : null}
      {parkingfee ? <Item>주차요금 : {parse(parkingfee)}</Item> : null}
      {restdate ? <Item>쉬는 날 : {parse(restdate)}</Item> : null}
      {usefee ? <Item>이용요금 : {parse(usefee)}</Item> : null}
      {usetime ? <Item>이용시간 : {parse(usetime)}</Item> : null}
      {scale ? <Item>규모 : {parse(scale)}</Item> : null}
      {spendtime ? <Item>관람 소요시간 : {parse(spendtime)}</Item> : null}
    </ItemContainer>
  </Container>
);

export default CulturalIntro;
