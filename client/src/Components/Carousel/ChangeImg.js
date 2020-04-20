import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  z-index: 3;
  visibility: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const ItemContainer = styled.div`
  padding-right: 5px;
  &:last-child {
    padding-right: 0;
  }
`;

const Item = styled.div`
  border: 1px solid black;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  &.currentBtn {
    background-color: red;
  }
  &.hiddenBtn {
    background-color: #11ffee00;
  }
`;

export default ({ total, imgNum, click }) => (
  <Container className="changeImg">
    {total && total.length > 1 ? (
      total.map((all, i) =>
        imgNum === i ? (
          <ItemContainer key={all.serialnum}>
            <Item className="currentBtn" />
          </ItemContainer>
        ) : (
          <ItemContainer key={all.serialnum}>
            <Item className="hiddenBtn" id={i} onClick={click} />
          </ItemContainer>
        )
      )
    ) : (
      <ItemContainer>
        <Item className="currentBtn" />
      </ItemContainer>
    )}
  </Container>
);
