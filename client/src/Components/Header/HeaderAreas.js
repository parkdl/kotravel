import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAreaTitle } from "../Translate";

const HeaderArea = styled.li`
  width: 15%;
  position: relative;
  &:hover {
    background-color: #d4681c;
    .LangBox {
      visibility: visible;
    }
  }
`;

const AreaTitle = styled.a`
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AreaIcon = styled.span`
  padding-right: 5px;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  visibility: hidden;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`;

const AreaList = styled.ul`
  width: 100%;
  margin: 5px 0;
`;

const AreaItem = styled.li`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const AreaLink = styled(Link)`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 15px;
`;

export const HeaderAreas = ({ lang, pathname, code, area, loading }) =>
  loading ? null : (
    <HeaderArea>
      <AreaTitle href="">
        <AreaIcon>
          <i className="fas fa-map"></i>
        </AreaIcon>
        <span>{`${getAreaTitle(lang)}`}</span>
      </AreaTitle>

      <Container className="LangBox">
        <AreaList>
          {code.map((code, i) => (
            <AreaItem key={code} current={pathname === "/" ? "/kor/area" : `${lang}/area`}>
              <AreaLink
                to={
                  pathname === "/"
                    ? `/kor/area?area=${code}&page=1`
                    : `${lang}/area?area=${code}&page=1`
                }
              >
                <Text>{area[i]}</Text>
              </AreaLink>
            </AreaItem>
          ))}
        </AreaList>
      </Container>
    </HeaderArea>
  );
