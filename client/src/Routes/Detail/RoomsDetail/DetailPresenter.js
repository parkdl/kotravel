import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import CommonDate from "../../../Components/DetailData/CommonData";
import ImageData from "../../../Components/DetailData/ImageData";
import RoomsInfo from "../../../Components/DetailData/RoomsInfo";
import RoomsIntro from "../../../Components/DetailData/Intro/RoomsIntro";

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
        info.map(room => (
          <RoomsInfo
            key={room.roomcode}
            title={room.roomtitle}
            basecount={room.roombasecount}
            maxcount={room.roommaxcount}
            offseasonminfee1={room.roomoffseasonminfee1}
            offseasonminfee2={room.roomoffseasonminfee2}
            peakseasonminfee1={room.roompeakseasonminfee1}
            peakseasonminfee2={room.roompeakseasonminfee2}
            intro={room.roomintro}
            bathfacility={room.roombathfacility}
            bath={room.roombath}
            hometheater={room.roomhometheater}
            aircondition={room.roomaircondition}
            tv={room.roomtv}
            pc={room.roompc}
            cable={room.roomcable}
            internet={room.roominternet}
            refrigerator={room.roomrefrigerator}
            toiletries={room.roomtoiletries}
            sofa={room.roomsofa}
            cook={room.roomcook}
            table={room.roomtable}
            hairdryer={room.roomhairdryer}
            img1={room.roomimg1}
            img2={room.roomimg2}
            img3={room.roomimg3}
            img4={room.roomimg4}
            img5={room.roomimg5}
          />
        ))
      ) : info && 0 < info.length < 2 ? (
        <RoomsInfo
          title={intro.roomtitle}
          basecount={intro.roombasecount}
          maxcount={intro.roommaxcount}
          offseasonminfee1={intro.roomoffseasonminfee1}
          offseasonminfee2={intro.roomoffseasonminfee2}
          peakseasonminfee1={intro.roompeakseasonminfee1}
          peakseasonminfee2={intro.roompeakseasonminfee2}
          intro={intro.roomintro}
          bathfacility={intro.roombathfacility}
          bath={intro.roombath}
          hometheater={intro.roomhometheater}
          aircondition={intro.roomaircondition}
          tv={intro.roomtv}
          pc={intro.roompc}
          cable={intro.roomcable}
          internet={intro.roominternet}
          refrigerator={intro.roomrefrigerator}
          toiletries={intro.roomtoiletries}
          sofa={intro.roomsofa}
          cook={intro.roomcook}
          table={intro.roomtable}
          hairdryer={intro.roomhairdryer}
          img1={intro.roomimg1}
          img2={intro.roomimg2}
          img3={intro.roomimg3}
          img4={intro.roomimg4}
          img5={intro.roomimg5}
        />
      ) : null}

      <RoomsIntro
        accomcount={intro.accomcountlodging}
        benikia={intro.benikia}
        checkintime={intro.checkintime}
        checkouttime={intro.checkouttime}
        chkcooking={intro.chkcooking}
        foodplace={intro.foodplace}
        goodstay={intro.goodstay}
        hanok={intro.hanok}
        infocenter={intro.infocenterlodging}
        parking={intro.parkinglodging}
        pickup={intro.pickup}
        roomcount={intro.roomcount}
        reservation={intro.reservationlodging}
        reservationurl={intro.reservationurl}
        roomtype={intro.roomtype}
        scale={intro.scalelodging}
        subfacility={intro.subfacility}
        barbecue={intro.barbecue}
        beauty={intro.beauty}
        beverage={intro.beverage}
        bicycle={intro.bicycle}
        campfire={intro.campfire}
        fitness={intro.fitness}
        karaoke={intro.karaoke}
        publicbath={intro.publicbath}
        publicpc={intro.publicpc}
        sauna={intro.sauna}
        seminar={intro.seminar}
        sports={intro.sports}
        refundregulation={intro.refundregulation}
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
