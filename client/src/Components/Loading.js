import React from "react";
import styled from "styled-components";
import loading from "../assets/loading.gif";

const Container = styled.div`
  width: 100%;
`;

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoadingImg = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  width: 500px;
  height: 500px;
  background-color: #edeff0;
  margin: 0 auto;
`;

export default () => (
  <Container>
    <LoadingBox>
      <LoadingImg img={loading}></LoadingImg>
    </LoadingBox>
  </Container>
);
