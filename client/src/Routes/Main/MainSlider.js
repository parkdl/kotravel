import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const SlideBox = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  &:hover {
    .count {
      visibility: visible;
    }
  }
`;

const Image = styled.div`
  background-image: url(${props => props.slImage});
  height: 500px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
`;

const Count = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  z-index: 1;
  font-weight: bold;
  visibility: hidden;
`;

const Way = styled.div`
  width: 100%;
  position: absolute;
  color: white;
  top: 200px;
  .icon-container {
    display: flex;
    justify-content: space-between;
    position: relative;
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
      :hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
      .fas {
        margin-left: 7.5px;
        margin-top: 42.5px;
        font-size: 15px;
        z-index: 2;
        opacity: 1;
      }
    }
  }
`;

export default class extends React.Component {
  state = {
    number: 3
  };

  render() {
    const { number } = this.state;
    return (
      <Container>
        <SlideBox>
          <Image slImage={require(`../../assets/${number}.jpg`)} />
          <Count className="count">{`${number} / 3`}</Count>
          <Way>
            <div className="icon-container">
              <div className="icon">
                <i className="fas fa-chevron-left left" />
              </div>
              <div className="icon">
                <i className="fas fa-chevron-right right" />
              </div>
            </div>
          </Way>
        </SlideBox>
      </Container>
    );
  }
}
