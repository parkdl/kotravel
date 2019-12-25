import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const SearchForm = () => (
  <Container>
    <Form method="get" action="/search">
      <Input name="keyword" type="text" placeholder="input text" />
      <Input type="hidden" name="page" value="1" />
      <Input type="submit" />
    </Form>
  </Container>
);

export default SearchForm;
