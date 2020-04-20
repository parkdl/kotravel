import React from "react";
import HomeVideo from "../../../assets/HomeItem/HomeVideo.mp4";
import styled from "styled-components";
import parse from "html-react-parser";
import { getHomeHello } from "../../../Components/Translate";

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
`;

const Video = styled.video`
  transform: translateY(180px);
  right: 50%;
  bottom: 50%;
  overflow: hidden;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
`;

const TextContainer = styled.div`
  width: 400px;
  position: absolute;
  top: 550px;
  left: 50px;
  z-index: 3;
`;

const TextBox = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Text = styled.span`
  color: white;
  font-weight: bold;
  font-size: 40px;
`;

const BackgroundVideo = ({ lang }) => (
  <Container>
    <TextContainer>
      <TextBox>
        <Text>{parse(`${getHomeHello(lang)}`)}</Text>
      </TextBox>
    </TextContainer>
    <Video autoPlay loop muted src={HomeVideo} type="video/mp4" />;
  </Container>
);

export default BackgroundVideo;
