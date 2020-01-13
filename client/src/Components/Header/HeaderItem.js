import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { korCategory, mulCategory, language } from "../Variable";

const List = styled.ul`
  width: 66%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Item = styled.li`
  border-bottom: solid 1px ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  font-size: 20px;
`;

export const HeaderItem = ({ pathname, lang }) => (
  <List>
    {lang === "/kor"
      ? korCategory.map((cat, i) => (
          <Item key={i} current={pathname === `${lang}/${cat}`}>
            <SLink to={`${lang}/${cat}?page=1`}>{language.korean[i]}</SLink>
          </Item>
        ))
      : mulCategory.map((cat, i) => (
          <Item key={i} current={pathname === `${lang}/${cat}`}>
            <SLink to={`${lang}/${cat}?page=1`}>
              {lang === "/eng"
                ? language.english[i]
                : lang === "/jpn"
                ? language.japanese[i]
                : lang === "/spn"
                ? language.spanish[i]
                : lang === "/chi"
                ? language.chinese[i]
                : lang === "/rus"
                ? language.russian[i]
                : lang === "/fre"
                ? language.france[i]
                : lang === "/ger"
                ? language.germany[i]
                : null}
            </SLink>
          </Item>
        ))}
  </List>
);
