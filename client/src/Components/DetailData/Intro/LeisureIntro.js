import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const LeisureIntro = ({
  accomcount,
  chkbabycarriage,
  chkcreditcard,
  chkpet,
  expagerange,
  infocenter,
  openperiod,
  parkingfee,
  parking,
  reservation,
  restdate,
  scale,
  usefee,
  usetime
}) => (
  <Container>
    <ItemContainer>
      {accomcount ? <Item>수용인원 : {parse(accomcount)}</Item> : null}
      {chkbabycarriage ? <Item>유모차 대여 정보 : {parse(chkbabycarriage)}</Item> : null}
      {chkcreditcard ? <Item>신용카드 가능 유무 : {parse(chkcreditcard)}</Item> : null}
      {chkpet ? <Item>애완동물 동반 : {parse(chkpet)}</Item> : null}
      {expagerange ? <Item>체험 가능연령 : {parse(expagerange)}</Item> : null}
      {infocenter ? <Item>문의 및 안내 : {parse(infocenter)}</Item> : null}
      {openperiod ? <Item>개장기간 : {parse(openperiod)}</Item> : null}
      {parkingfee ? <Item>주차요금 : {parse(parkingfee)}</Item> : null}
      {parking ? <Item>주차시설 : {parse(parking)}</Item> : null}
      {reservation ? <Item>예약안내 : {parse(reservation)}</Item> : null}
      {restdate ? <Item>쉬는날 : {parse(restdate)}</Item> : null}
      {scale ? <Item>규모 : {parse(scale)}</Item> : null}
      {usefee ? <Item>입장료 : {parse(usefee)}</Item> : null}
      {usetime ? <Item>이용시간 : {parse(usetime)}</Item> : null}
    </ItemContainer>
  </Container>
);

export default LeisureIntro;
