import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCategoryTitle } from "../Translate";

const HeaderCategoryList = styled.li`
  width: 15%;
  position: relative;
  &:hover {
    background-color: #d4681c;
    .LangBox {
      visibility: visible;
    }
  }
`;

const CategoryTitle = styled.a`
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryIcon = styled.span`
  padding-right: 5px;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  visibility: hidden;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CategoryList = styled.ul`
  width: 100%;
  margin: 5px 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryLink = styled(Link)`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const TextBox = styled.div``;

const Text = styled.span`
  font-size: 15px;
`;

export const HeaderCategory = ({ lang, pathname, type, category, loading }) =>
  loading ? null : (
    <HeaderCategoryList>
      <CategoryTitle href="">
        <CategoryIcon>
          <i className="fas fa-filter"></i>
        </CategoryIcon>
        <span>{`${getCategoryTitle(lang)}`}</span>
      </CategoryTitle>

      <Container className="LangBox">
        <CategoryList>
          {type.path.map((path, i) => (
            <CategoryItem key={i} current={pathname === "/" ? `/kor/${path}` : `${lang}/${path}`}>
              <CategoryLink
                to={pathname === "/" ? `/kor/${path}?page=1` : `${lang}/${path}?page=1`}
              >
                <TextBox>
                  <Text>{category[i]}</Text>
                </TextBox>
              </CategoryLink>
            </CategoryItem>
          ))}
        </CategoryList>
      </Container>
    </HeaderCategoryList>
  );
