import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const TouristIntro = ({
  count,
  babycarriage,
  creditcard,
  pet,
  expagerange,
  expguide,
  heritage1,
  heritage2,
  heritage3,
  infocenter,
  parking,
  restdate,
  useseason,
  usetime
}) => (
  <Container>
    <ItemContainer>
      {count ? <Item>수용인원 : {parse(count)}</Item> : null}
      {babycarriage ? <Item>유모자 대여 정보 : {parse(babycarriage)}</Item> : null}
      {creditcard ? <Item>신용카드 가능 유무 : {parse(creditcard)}</Item> : null}
      {pet ? <Item>애완동물 동반 : {parse(pet)}</Item> : null}
      {expagerange ? <Item>체험 가능 연령 : {parse(expagerange)}</Item> : null}
      {expguide ? <Item>체험 안내 : {parse(expguide)}</Item> : null}
      {heritage1 ? <Item>세계문화유산 유무 : {parse(heritage1)}</Item> : null}
      {heritage2 ? <Item>세계자연유산 유무 : {parse(heritage2)}</Item> : null}
      {heritage3 ? <Item>세계기록유산 유무 : {parse(heritage3)}</Item> : null}
      {infocenter ? <Item>문의 및 안내 : {parse(infocenter)}</Item> : null}
      {parking ? <Item>주차시설 : {parse(parking)}</Item> : null}
      {restdate ? <Item>쉬는 날 : {parse(restdate)}</Item> : null}
      {useseason ? <Item>이용시기 : {parse(useseason)}</Item> : null}
      {usetime ? <Item>이용시간 : {parse(usetime)}</Item> : null}
    </ItemContainer>
  </Container>
);

export default TouristIntro;
