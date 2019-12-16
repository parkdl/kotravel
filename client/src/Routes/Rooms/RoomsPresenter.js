import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const RoomsPresenter = ({ rooms }) => (
  <Container>
    {rooms && rooms.length > 0 && (
      <Section title="Rooms">
        {rooms.map(room => (
          <Poster
            key={room.contentid}
            id={room.contentid}
            imageUrl={room.firstimage}
            title={room.title}
            addr={room.addr1}
            subAddr={room.addr2}
            isRooms={true}
          />
        ))}
      </Section>
    )}
  </Container>
);

export default RoomsPresenter;
