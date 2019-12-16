import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
  width: 100%;
  margin-top: 5%;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 600;
  padding-left: 5%;
`;

const Item = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Item>{children}</Item>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Section;
