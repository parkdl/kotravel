import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Tab = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const WeahterNavTab = ({ loading, date, clickEvent }) =>
  loading ? (
    <span>loading...</span>
  ) : (
    <Container>
      {date && date.length > 0
        ? date.map((date, i) => (
            <Tab key={i} onClick={clickEvent}>
              <span id={i}>{date}</span>
            </Tab>
          ))
        : null}
    </Container>
  );

export default WeahterNavTab;
