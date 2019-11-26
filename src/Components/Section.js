import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
  width: 100%;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Item = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
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
