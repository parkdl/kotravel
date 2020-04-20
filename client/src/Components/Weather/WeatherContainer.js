import React from "react";
import { weatherTranslate } from "../Variable";
import axios from "axios";
import WeatherPresenter from "./WeatherPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      weatherSlice: null,
      compareDate: null,
      beginValue: 0,
      title: null,
      loading: true,
    };
    this.getWeatherData = this.getWeatherData.bind(this);
    this.getWeatherArray = this.getWeatherArray.bind(this);
    this.getTranslateTitle = this.getTranslateTitle.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount = async ({ address, lang } = this.props) => {
    await this.getWeatherArray(address, lang);
    this.getTranslateTitle();
  };

  getTranslateTitle = () => {
    const { lang } = this.props;
    for (var i = 0; i < weatherTranslate.length; i++) {
      if (weatherTranslate[i].lang === lang) {
        this.setState({
          title: weatherTranslate[i].translate,
        });
      }
    }
  };

  getWeatherArray = async (address, lang) => {
    for (var o = 0; o < weatherTranslate.length; o++) {
      if (lang === weatherTranslate[o].lang) {
        const code = weatherTranslate[o].code;
        const { weatherCode, area } = this.props;
        for (var i = 0; i < weatherCode.length; i++) {
          if (address.includes(area[i])) {
            const weatherArray = await axios("http://api.openweathermap.org/data/2.5/forecast", {
              params: {
                appid: "0c7a6c7395e5d3ea82ce8e0d5cd52814",
                q: weatherCode[i],
                units: "metric",
                lang: code,
              },
            });
            this.setState({
              weatherData: weatherArray.data.list,
            });
          }
        }
      }
    }
  };

  componentDidUpdate() {
    const { weatherData, weatherSlice } = this.state;

    if (weatherSlice === null) {
      this.getWeatherData(weatherData);

      this.setState({
        loading: false,
      });
    }
  }

  getWeatherData = (weather) => {
    const dateArray = [
      weather[0].dt_txt.slice(5, 10),
      weather[6].dt_txt.slice(5, 10),
      weather[14].dt_txt.slice(5, 10),
      weather[22].dt_txt.slice(5, 10),
      weather[30].dt_txt.slice(5, 10),
      weather[39].dt_txt.slice(5, 10),
    ];

    const today = weather.filter((month) => month.dt_txt.slice(5, 10) === dateArray[0]);
    const one = weather.filter((month) => month.dt_txt.slice(5, 10) === dateArray[1]);
    const two = weather.filter((month) => month.dt_txt.slice(5, 10) === dateArray[2]);
    const three = weather.filter((month) => month.dt_txt.slice(5, 10) === dateArray[3]);
    const four = weather.filter((month) => month.dt_txt.slice(5, 10) === dateArray[4]);
    const five = weather.filter((month) => month.dt_txt.slice(5, 10) === dateArray[5]);

    this.setState({
      weatherSlice: [today, one, two, three, four, five],
      compareDate: dateArray,
    });
  };

  handleOnClick = (event) => {
    const { beginValue } = this.state;
    const currentValue = parseInt(event.target.id);
    const compareValue = beginValue !== currentValue;
    const finalValue = compareValue ? currentValue : beginValue;

    this.setState({
      beginValue: finalValue,
    });
  };

  render() {
    const { title, loading, weatherSlice, compareDate, beginValue } = this.state;
    console.log(this.state.weatherData);
    return (
      <WeatherPresenter
        weather={weatherSlice}
        date={compareDate}
        clickEvent={this.handleOnClick}
        checkValue={beginValue}
        title={title}
        loading={loading}
      />
    );
  }
}
