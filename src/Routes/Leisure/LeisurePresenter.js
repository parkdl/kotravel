import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const LeisurePresenter = ({ leisure }) => (
  <Container>
    {leisure && leisure.length > 0 && (
      <Section title="Leisure">
        {leisure.map(sports => (
          <Poster
            key={sports.contentid}
            id={sports.contentid}
            imageUrl={sports.firstimage}
            title={sports.title}
            addr={sports.addr1}
            subAddr={sports.addr2}
          />
        ))}
      </Section>
    )}
  </Container>
);

export default LeisurePresenter;
