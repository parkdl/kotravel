import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Email = styled.input``;

const Password1 = styled.input``;

const Send = styled.input``;

const LoginPresenter = ({ handleChange, handleSubmit }) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      Email : <Email type="email" name="email" required={true} onChange={handleChange} />
      비밀번호 :{" "}
      <Password1 type="password" name="password1" required={true} onChange={handleChange} />
      <Send type="submit" value="Send" />
    </Form>
  </Container>
);

export default LoginPresenter;
