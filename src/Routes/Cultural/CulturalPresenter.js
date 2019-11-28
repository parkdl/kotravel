import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const CulturalPresenter = ({ cultural }) => (
  <Container>
    {cultural && cultural.length > 0 && (
      <Section title="Cultural">
        {cultural.map(culture => (
          <Poster
            key={culture.contentid}
            id={culture.contentid}
            imageUrl={culture.firstimage}
            title={culture.title}
            addr={culture.addr1}
            subAddr={culture.addr2}
          />
        ))}
      </Section>
    )}
  </Container>
);

export default CulturalPresenter;
