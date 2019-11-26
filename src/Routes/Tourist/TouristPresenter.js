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
          <Poster key={tour.index} imageUrl={tour.firstimage2} />
        ))}
      </Section>
    )}
  </Container>
);

export default TouristPresenter;
