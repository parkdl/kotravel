import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import BackgroundVideo from "./HomeComponents/BackgroundVideo";
import Helmet from "react-helmet";

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  position: relative;
`;

const HomePresenter = ({ lang, pathname, code, type, area, category, loading }) => (
  <Container>
    <Helmet>
      <title>Home | Kotravel</title>
    </Helmet>
    <Header
      lang={lang}
      pathname={pathname}
      code={code}
      type={type}
      area={area}
      category={category}
      loading={loading}
    />
    <BackgroundVideo lang={lang} />
  </Container>
);

export default HomePresenter;
