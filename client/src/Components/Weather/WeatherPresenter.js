import React from "react";
import styled from "styled-components";
import WeahterNavTab from "./WeatherNavTab";
import Loading from "../Loading";
import WeatherContents from "./WeatherContents";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  float: left;
  margin: 0;
`;

const Title = styled.div``;

const Main = styled.div``;

const WeatherPresenter = ({ title, loading, weather, date, clickEvent, checkValue }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      <Title>
        <span>{title}</span>
      </Title>

      <Main>
        <WeahterNavTab date={date} clickEvent={clickEvent} />
        <WeatherContents weather={weather} date={date} checkValue={checkValue} />
      </Main>
    </Container>
  );

export default WeatherPresenter;
