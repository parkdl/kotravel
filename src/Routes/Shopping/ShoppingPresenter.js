import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const ShoppingPresenter = ({ shopping }) => (
  <Container>
    {shopping && shopping.length > 0 && (
      <Section title="Shopping">
        {shopping.map(shop => (
          <Poster
            key={shop.contentid}
            id={shop.contentid}
            imageUrl={shop.firstimage}
            title={shop.title}
            addr={shop.addr1}
            subAddr={shop.addr2}
          />
        ))}
      </Section>
    )}
  </Container>
);

export default ShoppingPresenter;
