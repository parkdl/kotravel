import React from "react";
import styled from "styled-components";

import { Category } from "./Category";
import Carousel from "../../Components/Carousel/Carousel";

const Container = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 20px auto;
`;

export default class extends React.Component {
  render() {
    const {
      match: { path: pathName }
    } = this.props;

    return (
      <Container>
        <>
          <Carousel />
          <Category pathName={pathName} />
        </>
      </Container>
    );
  }
}
