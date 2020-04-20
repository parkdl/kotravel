import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Data = styled.div`
  border: 1px solid black;
`;

const Upper = styled.div``;

const Lower = styled.div``;

const Article = styled.div``;

const Icon = styled.img``;

const LowerIcon = styled.div`
  &.Humidity {
    width: 10px;
    height: 10px;
  }
`;

const Text = styled.div``;

const WeatherContents = ({ weather, checkValue }) => (
  <Container>
    {weather && weather.length > 0
      ? weather[checkValue].map((data, i) => (
          <Data key={i}>
            <Upper>
              <Icon
                className="Main"
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              ></Icon>
              <Article className="upper">
                <Text className="Temp">
                  {data.main.temp.toFixed(1)}
                  <span>℃</span>
                </Text>
                <Text className="Description">{data.weather[0].description}</Text>
                <Text className="Time">{data.dt_txt.slice(10, 16)}</Text>
              </Article>
            </Upper>
            <Lower>
              <Article className="lowerOne">
                <LowerIcon className="Wind">
                  <i className="fas fa-wind"></i>
                </LowerIcon>
                <Text className="Wind">
                  {data.wind.speed.toFixed(1)}
                  <span>m/s</span>
                </Text>
              </Article>
              <Article className="lowerTwo">
                <Icon className="Humidity" src="https://api.iconify.design/wi-humidity.svg"></Icon>
                <Text className="Humidity">
                  {data.main.humidity} <span>%</span>
                </Text>
              </Article>
              <Article className="lowerThree">
                <LowerIcon className="Cloud">
                  <i className="fas fa-cloud"></i>
                </LowerIcon>
                <Text className="Cloud">
                  {data.clouds.all} <span>%</span>
                </Text>
              </Article>
            </Lower>
          </Data>
        ))
      : null}
  </Container>
);

export default WeatherContents;
