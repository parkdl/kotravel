import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const FestivalPresenter = ({ festival }) => (
  <Container>
    {festival && festival.length > 0 && (
      <Section title="Festival">
        {festival.map(art => (
          <Poster
            key={art.contentid}
            id={art.contentid}
            imageUrl={art.firstimage}
            title={art.title}
            addr={art.addr1}
            subAddr={art.addr2}
          />
        ))}
      </Section>
    )}
  </Container>
);

export default FestivalPresenter;
