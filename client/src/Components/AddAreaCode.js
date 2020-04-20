import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAreaTitle } from "./Translate";

const Container = styled.div``;

const AreaBox = styled.div``;

const AreaLabel = styled.label``;

const AreaCodeArray = styled.ul``;

const AreaCodeItem = styled.li``;

const AreaLink = styled(Link)``;

export default ({ lang, pathname, area, code }) => (
  <Container>
    <AreaBox>
      <AreaLabel htnlFor="areaCode">{`${getAreaTitle(lang)}`}</AreaLabel>

      <AreaCodeArray>
        {code.map((areaCode, i) => (
          <AreaCodeItem key={areaCode}>
            <AreaLink to={`${pathname}?area=${areaCode}&page=1`}>{area[i]}</AreaLink>
          </AreaCodeItem>
        ))}
      </AreaCodeArray>
    </AreaBox>
  </Container>
);
