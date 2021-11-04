import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      remember,
    };

    axios
      .post("http://localhost:3001/api/v1/user/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.body.token);
        setAuthenticated(true);
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (redirect) {
    return <Redirect to="/profile" authenticated={authenticated} />;
  }

  return (
    <form onSubmit={onSubmit}>
      <SCInputWrapper>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </SCInputWrapper>
      <SCInputWrapper>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </SCInputWrapper>
      <SCInputRemember>
        <input
          type="checkbox"
          id="remember-me"
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </SCInputRemember>
      <SCBtnSignIn>Sign In</SCBtnSignIn>
    </form>
  );
};

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
