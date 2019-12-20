import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const ItemContainer = styled.div``;

const Item = styled.div``;

const RoomsInfo = ({
  title,
  basecount,
  maxcount,
  offseasonminfee1,
  offseasonminfee2,
  peakseasonminfee1,
  peakseasonminfee2,
  intro,
  bathfacility,
  bath,
  hometheater,
  aircondition,
  tv,
  pc,
  cable,
  internet,
  refrigerator,
  toiletries,
  sofa,
  cook,
  table,
  hairdryer,
  img1,
  img2,
  img3,
  img4,
  img5
}) => (
  <Container>
    <ItemContainer>
      {title ? <Item>{title}</Item> : null}
      {basecount ? <Item>{basecount}</Item> : null}
      {maxcount ? <Item>{maxcount}</Item> : null}
      {offseasonminfee1 ? <Item>{offseasonminfee1}</Item> : null}
      {offseasonminfee2 ? <Item>{offseasonminfee2}</Item> : null}
      {peakseasonminfee1 ? <Item>{peakseasonminfee1}</Item> : null}
      {peakseasonminfee2 ? <Item>{peakseasonminfee2}</Item> : null}
      {intro ? <Item>{intro}</Item> : null}
      {bathfacility ? <Item>{bathfacility}</Item> : null}
      {bath ? <Item>{bath}</Item> : null}
      {hometheater ? <Item>{hometheater}</Item> : null}
      {aircondition ? <Item>{aircondition}</Item> : null}
      {tv ? <Item>{tv}</Item> : null}
      {pc ? <Item>{pc}</Item> : null}
      {cable ? <Item>{cable}</Item> : null}
      {internet ? <Item>{internet}</Item> : null}
      {refrigerator ? <Item>{refrigerator}</Item> : null}
      {toiletries ? <Item>{toiletries}</Item> : null}
      {sofa ? <Item>{sofa}</Item> : null}
      {cook ? <Item>{cook}</Item> : null}
      {table ? <Item>{table}</Item> : null}
      {hairdryer ? <Item>{hairdryer}</Item> : null}
      {img1 ? <Image banner={img1} /> : null}
      {img2 ? <Image banner={img2} /> : null}
      {img3 ? <Image banner={img3} /> : null}
      {img4 ? <Image banner={img4} /> : null}
      {img5 ? <Image banner={img5} /> : null}
    </ItemContainer>
  </Container>
);

export default RoomsInfo;
