import React from "react";
import styled from "styled-components";
import { getPlaceholderText } from "../Translate";

const Container = styled.div`
  width: 22.75%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SearchForm = styled.form`
  width: 100%;
`;

const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
`;

const Search = ({ lang }) => (
  <Container>
    {lang === "/" || lang === "/kor" ? (
      <SearchForm method="get" action="/kor/searchResult">
        <SearchInput type="text" name="keyword" placeholder={`${getPlaceholderText(lang)}`} />
        <SearchInput type="hidden" name="page" value="1" />
      </SearchForm>
    ) : (
      <SearchForm method="get" action={`${lang}/searchResult`}>
        <SearchInput type="text" name="keyword" placeholder={`${getPlaceholderText(lang)}`} />
        <SearchInput type="hidden" name="page" value="1" />
      </SearchForm>
    )}
  </Container>
);

export default Search;
