import React from "react";
import styled from "styled-components";

const Container = styled.div`
  top: 200px;
  position: absolute;
  .icon::before {
    content: "";
    background-color: #cfd6d9;
    position: absolute;
    width: 25px;
    height: 100px;
    opacity: 0.3;
  }
  .icon {
    width: 25px;
    height: 100px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #def9f9;
    :hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
    
`;

export const Arrow = ({ direction, clickFunction, icon }) => (
  <Container className={`slide-arrow ${direction}`} onClick={clickFunction}>
    <div className="icon">{icon}</div>
  </Container>
);
