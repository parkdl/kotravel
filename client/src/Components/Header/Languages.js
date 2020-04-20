import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeElement } from "../../Components/Variable";
import { getSelectLang } from "../Translate";

const HeaderLang = styled.li`
  width: 15%;
  position: relative;
  &:hover {
    background-color: #d4681c;
    .LangBox {
      visibility: visible;
    }
  }
`;

const LangTitle = styled.a`
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LangIcon = styled.span`
  padding-right: 5px;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  visibility: hidden;
`;

const LangList = styled.ul`
  margin: 5px 0;
`;

const LangItem = styled.li`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const LangLink = styled(Link)`
  width: 5.58%;
  padding: 0;
`;

const Flag = styled.div`
  width: 40px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlagImg = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  height: 20px;
  width: 40px;
`;

const FlagText = styled.div`
  margin-top: 5px;
`;

export const Languages = ({ lang, pathname, loading }) =>
  loading ? null : (
    <HeaderLang>
      <LangTitle href="">
        <LangIcon>
          <i className="fas fa-globe"></i>
        </LangIcon>
        <span>{`${getSelectLang(lang)}`}</span>
      </LangTitle>

      <Container className="LangBox">
        <LangList>
          {HomeElement.map((home) => (
            <LangItem key={home.country} current={pathname === `${lang}`}>
              <LangLink to={home.linkTo}>
                <Flag>
                  <FlagImg img={home.flagImg} value={home.country} />
                  <FlagText>{home.country}</FlagText>
                </Flag>
              </LangLink>
            </LangItem>
          ))}
        </LangList>
      </Container>
    </HeaderLang>
  );
