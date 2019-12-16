/*import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import parse from "html-react-parser";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemContainer = styled.div``;

const Item = styled.div`
  width: 600px;
`;

const ImageContainer = styled.div`
  width: 60%;
  height: 100vh;
`;

const Image = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
  height: 50%;
`;

const DetailPresenter = ({
  loading,
  detailCommon,
  detailIntro,
  detailInfo,
  detailImage,
  tourist,
  cultural,
  festival,
  food,
  room,
  lersure,
  shopping
}) =>
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

      <ItemContainer>
        <Item className="title">{detailCommon.title}</Item>
        <Item>
          {detailCommon.addr1}
          {detailCommon.addr2}
        </Item>
        <Item>{detailCommon.overview ? parse(detailCommon.overview) : null}</Item>
        {detailCommon.homepage ? <Item>{parse(detailCommon.homepage)}</Item> : null}

        {detailInfo === undefined ? null : detailInfo.length > 1 ? (
          detailInfo.map((info, index) => (
            <Item key={index}>
              {info.infoname} {parse(info.infotext)}
            </Item>
          ))
        ) : (
          <Item>
            {detailInfo.infoname} {parse(detailInfo.infotext)}
          </Item>
        )}

        {tourist ? (
          <ItemContainer>
            {detailIntro.chkbabycarriage ? (
              <Item>유모차 대여 : {detailIntro.chkbabycarriage}</Item>
            ) : null}
            {detailIntro.chkcreditcard ? (
              <Item>신용카드 사용 : {detailIntro.chkcreditcard}</Item>
            ) : null}
            {detailIntro.chkpet ? <Item>애완동물 동반 : {detailIntro.chkpet}</Item> : null}

            {detailIntro.expagerange ? (
              <Item>체험가능 연령 : {detailIntro.expagerange}</Item>
            ) : null}
            {detailIntro.expguide ? <Item>체험안내 : {parse(detailIntro.expguide)}</Item> : null}
            {detailIntro.infocenter ? (
              <Item>문의 / 안내 : {parse(detailIntro.infocenter)}</Item>
            ) : null}
            {detailIntro.parking ? <Item>주차시설 : {detailIntro.parking}</Item> : null}
            {detailIntro.restdate ? <Item>쉬는날 : {detailIntro.restdate}</Item> : null}
            {detailIntro.usetime ? <Item>이용시간 : {parse(detailIntro.usetime)}</Item> : null}
          </ItemContainer>
        ) : null}
      </ItemContainer>

      <ImageContainer>
        {detailImage === undefined ? null : detailImage.length > 1 ? (
          detailImage.map((image, index) => <Image key={index} bgImg={image.originimgurl}></Image>)
        ) : (
          <Image bgImg={detailImage.originimgurl}></Image>
        )}
      </ImageContainer>
    </Container>
  );

DetailPresenter.propTypes = {
  detailCommon: PropTypes.object,
  detailIntro: PropTypes.object,
  detailInfo: PropTypes.any,
  detailImage: PropTypes.any
};

export default DetailPresenter;*/
import React from "react";
import styled from "styled-components";

const DetailPresenter = ({ detail }) => <h1>{detail}</h1>;

export default DetailPresenter;
