import React from "react";
import styled from "styled-components";
import { getMeanAll, getPlaceholderText, getSearchBtn } from "../../Components/Translate";

const Form = styled.form``;

const Input = styled.input``;

const SearchContents = styled.div``;

const SearchCategory = styled.div``;

const SearchArea = styled.div``;

const Select = styled.select``;

const Option = styled.option``;

export default ({ lang, keyword, area, category, type, code }) => (
  <Form method="get" action={`${lang}/searchResult`}>
    <Input
      type="text"
      name="keyword"
      placeholder={`${getPlaceholderText(lang)}`}
      required
      defaultValue={keyword ? `${keyword}` : null}
    />

    <Input type="hidden" name="page" value="1" />

    <SearchContents>
      <SearchCategory>
        <Select name="type">
          <Option value="">{`${getMeanAll(lang)}`}</Option>
          {type.path.map((typeCode, i) => (
            <Option key={i} value={typeCode}>
              {category[i]}
            </Option>
          ))}
        </Select>
      </SearchCategory>

      <SearchArea>
        <Select name="area">
          <Option>{`${getMeanAll(lang)}`}</Option>
          {code.map((areaCode, i) => (
            <Option key={i} value={areaCode}>
              {area[i]}
            </Option>
          ))}
        </Select>
      </SearchArea>
    </SearchContents>

    <input type="submit" value={`${getSearchBtn(lang)}`} />
  </Form>
);
