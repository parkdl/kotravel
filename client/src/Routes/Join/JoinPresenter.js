import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Name = styled.input``;

const Email = styled.input``;

const Password1 = styled.input``;

const Password2 = styled.input``;

const Send = styled.input``;

const JoinPresenter = ({ handleChange, handleSubmit }) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      이름 : <Name type="text" name="name" required={true} onChange={handleChange} />
      Email : <Email type="email" name="email" required={true} onChange={handleChange} />
      비밀번호 :{" "}
      <Password1 type="password" name="password1" required={true} onChange={handleChange} />
      비밀번호 확인 :{" "}
      <Password2 type="password" name="password2" required={true} onChange={handleChange} />
      <Send type="submit" value="Send" />
    </Form>
  </Container>
);

export default JoinPresenter;
