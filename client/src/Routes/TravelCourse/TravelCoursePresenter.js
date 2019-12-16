import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const TravelCoursePresenter = ({ travelCourse }) => (
  <Container>
    {travelCourse && travelCourse.length > 0 && (
      <Section title="TravelCourse">
        {travelCourse.map(travel => (
          <Poster
            key={travel.contentid}
            id={travel.contentid}
            imageUrl={travel.firstimage}
            title={travel.title}
            addr={travel.addr1}
            subAddr={travel.addr2}
          />
        ))}
      </Section>
    )}
  </Container>
);

export default TravelCoursePresenter;
