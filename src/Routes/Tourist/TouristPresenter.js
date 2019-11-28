import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const TouristPresenter = ({ tourist }) => (
  <Container>
    {tourist && tourist.length > 0 && (
      <Section title="Tourist">
        {tourist.map(tour => (
          <Poster
            key={tour.contentid}
            id={tour.contentid}
            imageUrl={tour.firstimage}
            title={tour.title}
            addr={tour.addr1}
            subAddr={tour.addr2}
          />
        ))}
      </Section>
    )}
  </Container>
);

export default TouristPresenter;
