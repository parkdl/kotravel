import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const SearchForm = () => (
  <Container>
    <Form method="get" action="/search?page=1">
      <Input name="keyword" type="text" placeholder="input text" />
    </Form>
  </Container>
);

export default SearchForm;
