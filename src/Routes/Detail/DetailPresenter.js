import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import parse from "html-react-parser";

const Container = styled.div``;

const Item = styled.div``;

const Per = styled.div``;

const Link = styled.a``;

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
      <Per>{detailCommon.overview ? parse(detailCommon.overview) : null}</Per>

      <Link>{detailCommon.homepage ? parse(detailCommon.homepage) : null}</Link>
    </Container>
  );

DetailPresenter.propTypes = {
  detailCommon: PropTypes.object,
  detailIntro: PropTypes.object,
  detailInfo: PropTypes.any,
  detailImage: PropTypes.array
};

export default DetailPresenter;
