import React from "react";
import styled from "styled-components";
import MainSlider from "./MainSlider";
import Category from "./Category";

const Container = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 20px auto;
`;

export default () => (
  <Container>
    <>
      <MainSlider />
      <Category />
    </>
  </Container>
);
