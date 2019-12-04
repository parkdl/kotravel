import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import parse from "html-react-parser";

const Container = styled.div``;

const Item = styled.div`
  width: 60%;
`;

const Link = styled.a``;

const ImageContainer = styled.div`
  width: 60%;
  height: 100vh;
`;

const Image = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 300px;
`;

const DetailPresenter = ({ loading, detailCommon, detailIntro, detailInfo, detailImage }) =>
  loading ? (
    <Container>
      <Helmet>
        <title>Loading | kotravel</title>
      </Helmet>
    </Container>
  ) : (
    <Container>
      <Helmet>
        <title>{detailCommon.title ? detailCommon.title : null} | kotravel</title>
      </Helmet>
      <Item>{detailCommon.title}</Item>
      <Item>
        {detailCommon.addr1}
        {detailCommon.addr2}
      </Item>
      <Item>{detailCommon.overview ? parse(detailCommon.overview) : null}</Item>
      <Link>{detailCommon.homepage ? parse(detailCommon.homepage) : null}</Link>
      <ImageContainer>
        {detailImage
          ? detailImage.map((image, index) => (
              <Image key={index} bgImg={image.originimgurl}></Image>
            ))
          : null}
      </ImageContainer>
    </Container>
  );

DetailPresenter.propTypes = {
  detailCommon: PropTypes.object,
  detailIntro: PropTypes.object,
  detailInfo: PropTypes.any,
  detailImage: PropTypes.array
};

export default DetailPresenter;
