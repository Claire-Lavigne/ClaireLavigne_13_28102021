import React from "react";
import styled from "styled-components";

function LoginForm() {
  return (
    <form>
      <SCInputWrapper>
        <label for="username">Username</label>
        <input type="text" id="username" />
      </SCInputWrapper>
      <SCInputWrapper>
        <label for="password">Password</label>
        <input type="password" id="password" />
      </SCInputWrapper>
      <SCInputRemember>
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">Remember me</label>
      </SCInputRemember>
      <SCBtnSignIn>Sign In</SCBtnSignIn>
    </form>
  );
}

export default LoginForm;

const SCInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
  label {
    font-weight: bold;
  }
  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

const SCInputRemember = styled.div`
  display: flex;
  label {
    margin-left: 0.25rem;
  }
`;

const SCBtnSignIn = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
`;
