import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const ShoppingIntro = ({
  chkbabycarriage,
  chkcreditcard,
  chkpet,
  culturecenter,
  fairday,
  infocenter,
  opentime,
  parking,
  restdate,
  restroom,
  saleitem,
  saleitemcost,
  scale,
  shopguide
}) => (
  <Container>
    <ItemContainer>
      {chkbabycarriage ? <Item>유모차 대여 : {parse(chkbabycarriage)}</Item> : null}
      {chkcreditcard ? <Item>신용카드 : {parse(chkcreditcard)}</Item> : null}
      {chkpet ? <Item>애완동물 동반 : {parse(chkpet)}</Item> : null}
      {culturecenter ? <Item>문화센터 : {parse(culturecenter)}</Item> : null}
      {fairday ? <Item>장서는 날 : {parse(fairday)}</Item> : null}
      {infocenter ? <Item>문의 및 안내 : {parse(infocenter)}</Item> : null}
      {opentime ? <Item>영업시간 : {parse(opentime)}</Item> : null}
      {parking ? <Item>주차시설 : {parse(parking)}</Item> : null}
      {restdate ? <Item>쉬는날 : {parse(restdate)}</Item> : null}
      {restroom ? <Item>화장실 설명 : {parse(restroom)}</Item> : null}
      {saleitem ? <Item>판매품목 : {parse(saleitem)}</Item> : null}
      {saleitemcost ? <Item>판매 품목별 가격 : {parse(saleitemcost)}</Item> : null}
      {scale ? <Item>규모 : {parse(scale)}</Item> : null}
      {shopguide ? <Item>매장 안내 : {parse(shopguide)}</Item> : null}
    </ItemContainer>
  </Container>
);

export default ShoppingIntro;
