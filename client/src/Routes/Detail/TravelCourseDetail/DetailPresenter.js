import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import CommonDate from "../../../Components/DetailData/CommonData";
import ImageData from "../../../Components/DetailData/ImageData";
import TravelCourseInfo from "../../../Components/DetailData/TravelCourseInfo";
import TravelCourseIntro from "../../../Components/DetailData/Intro/TravelCourseIntro";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
`;

const DetailPresenter = ({ common, image, info, intro, loading }) =>
  loading ? (
    <Container>
      <Helmet>
        <title>Loading | kotravel</title>
      </Helmet>
    </Container>
  ) : (
    <Container>
      <Helmet>
        <title>{common.title ? common.title : null} | kotravel</title>
      </Helmet>

      <CommonDate
        homepage={common.homepage}
        firstimage={common.firstimage}
        overview={common.overview}
        title={common.title}
        addr1={common.addr1}
        addr2={common.addr2}
      />

      {image && image.length > 1 ? (
        image.map(img => <ImageData key={img.serialnum} imgurl={img.originimgurl} />)
      ) : image && 0 < image.length < 2 ? (
        <ImageData imgurl={image.originimgurl} />
      ) : null}

      {info && info.length > 1 ? (
        info.map(TravelCourse => (
          <TravelCourseInfo
            key={TravelCourse.subnum}
            detailimg={TravelCourse.subdetailimg}
            detailoverview={TravelCourse.subdetailoverview}
            name={TravelCourse.subname}
          />
        ))
      ) : info && 0 < info.length < 2 ? (
        <TravelCourseInfo
          detailimg={info.subdetailimg}
          detailoverview={info.subdetailoverview}
          name={info.subname}
        />
      ) : null}

      <TravelCourseIntro
        distance={intro.distance}
        infocenter={intro.infocentertourcourse}
        schedule={intro.schedule}
        taketime={intro.taketime}
        theme={intro.theme}
      />
    </Container>
  );

DetailPresenter.propTypes = {
  common: PropTypes.object,
  intro: PropTypes.object,
  info: PropTypes.any,
  image: PropTypes.any
};

export default DetailPresenter;
