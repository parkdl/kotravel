import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ItemContainer = styled.div``;

const Form = styled.form``;

const Label = styled.label``;

const Input = styled.input``;

const Textarea = styled.textarea``;

const Board = () => (
  <Container>
    <Form method="post" action="/board">
      <ItemContainer>
        <Label for="title"> 제목 : </Label>
        <Input type="text" placeholder="title" name="title" id="title" />
      </ItemContainer>
      <Textarea name="contents" />
      <Input type="submit" />
    </Form>
  </Container>
);

export default Board;
