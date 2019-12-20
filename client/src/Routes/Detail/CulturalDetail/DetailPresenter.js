import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import CommonDate from "../../../Components/DetailData/CommonData";
import ImageData from "../../../Components/DetailData/ImageData";
import InfoData from "../../../Components/DetailData/InfoData";
import CulturalIntro from "../../../Components/DetailData/Intro/CulturalIntro";

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

      {info && info.length > 0 ? (
        info.map(infoItem => (
          <InfoData
            key={infoItem.serialnum}
            infoname={infoItem.infoname}
            infotext={infoItem.infotext}
          />
        ))
      ) : info && 0 < info.length < 2 ? (
        <InfoData infoname={info.infoname} infotext={info.infotext} />
      ) : null}
      {}

      <CulturalIntro
        count={intro.accomcountculture}
        babycarriage={intro.chkbabycarriage}
        creditcard={intro.culturechkcreditcardculture}
        pet={intro.chkpetculture}
        infocenter={intro.infocenterculture}
        parking={intro.parkingculture}
        restdate={intro.restdateculture}
        usetime={intro.usetimeculture}
        parkingfee={intro.parkingfee}
        scale={intro.scale}
        spendtime={intro.spendtime}
        discountinfo={intro.discountinfo}
        usefee={intro.usefee}
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
