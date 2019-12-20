import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const TravelCourseIntro = ({ distance, infocenter, schedule, taketime, theme }) => (
  <Container>
    <ItemContainer>
      {distance ? <Item>코스 총거리 : {parse(distance)}</Item> : null}
      {infocenter ? <Item>문의 및 안내 : {parse(infocenter)}</Item> : null}
      {schedule ? <Item>코스일정 : {parse(schedule)}</Item> : null}
      {taketime ? <Item>코스 총 소요시간 : {parse(taketime)}</Item> : null}
      {theme ? <Item>코스테마 : {parse(theme)}</Item> : null}
    </ItemContainer>
  </Container>
);

export default TravelCourseIntro;
