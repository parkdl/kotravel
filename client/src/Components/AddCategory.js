import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getCategoryTitle } from "./Translate";

const Container = styled.div``;

const TypeBox = styled.div``;

const TypeLabel = styled.label``;

const TypeArray = styled.ul``;

const TypeItem = styled.li``;

const TypeLink = styled(Link)``;

export default ({ lang, pathname, areaCode, type, category, loading }) =>
  loading ? null : (
    <Container>
      <TypeBox>
        <TypeLabel>{`${getCategoryTitle(lang)}`}</TypeLabel>

        <TypeArray>
          {type.typeNum.map((typeCode, i) => (
            <TypeItem key={i}>
              <TypeLink to={`${pathname}?type=${typeCode}&area=${areaCode}&page=1`}>
                {category[i]}
              </TypeLink>
            </TypeItem>
          ))}
        </TypeArray>
      </TypeBox>
    </Container>
  );
