import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const FoodPresenter = ({ food }) => (
  <Container>
    {food && food.length > 0 && (
      <Section title="Food">
        {food.map(eat => (
          <Poster
            key={eat.contentid}
            id={eat.contentid}
            imageUrl={eat.firstimage}
            title={eat.title}
            addr={eat.addr1}
            subAddr={eat.addr2}
          />
        ))}
      </Section>
    )}
  </Container>
);

export default FoodPresenter;
