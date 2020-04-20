import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import CommonDate from "../../Components/DetailData/CommonData";
import InfoData from "../../Components/DetailData/InfoData";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading";
import Carousel from "../../Components/Carousel/Carousel";
import WeatherContainer from "../../Components/Weather/WeatherContainer";
import MapContainer from "../../Components/Map/MapContainer";
import Intro from "../../Components/DetailData/Intro";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const DetailPresenter = ({
  common,
  image,
  info,
  intro,
  loading,
  lang,
  path,
  type,
  area,
  category,
  code,
  weatherCode,
}) =>
  loading ? (
    <Container>
      <Helmet>
        <title>Loading | kotravel</title>
      </Helmet>
      <Loading />
    </Container>
  ) : (
    <Container>
      <Helmet>
        <title>{common.title ? common.title : null} | kotravel</title>
      </Helmet>
      <Header
        lang={lang}
        type={type}
        area={area}
        category={category}
        code={code}
        loading={loading}
      />

      <CommonDate
        homepage={common.homepage}
        firstimage={common.firstimage}
        overview={common.overview}
        title={common.title}
        addr1={common.addr1}
        addr2={common.addr2}
      />

      {image && image.length > 0 ? <Carousel image={image} /> : null}

      <InfoData info={info} path={path} />

      <Intro intro={intro} path={path} />

      {path === "travelCourse" ? null : (
        <WeatherContainer
          address={common.addr1}
          lang={lang}
          weatherCode={weatherCode}
          area={area}
        />
      )}

      {path === "travelCourse" ? null : (
        <MapContainer title={common.title} addr1={common.addr1} lang={lang} />
      )}
    </Container>
  );

DetailPresenter.propTypes = {
  common: PropTypes.object,
  intro: PropTypes.object,
  info: PropTypes.any,
  image: PropTypes.any,
};

export default DetailPresenter;
