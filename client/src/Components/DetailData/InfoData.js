import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const ItemContainer = styled.div``;

const InfoName = styled.div``;

const InfoText = styled.div``;

const InfoData = ({ infoname, infotext }) => (
  <Container>
    <ItemContainer>
      <InfoName>{infoname}</InfoName>
      {infotext ? <InfoText>{parse(infotext)}</InfoText> : null}
    </ItemContainer>
  </Container>
);

export default InfoData;
