import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { LOG_IN } from "../reducers/isLogged";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLogged);

  const dispatch = useDispatch();

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
        data.remember
          ? localStorage.setItem("token", res.data.body.token)
          : localStorage.setItem("token", res.data.body.token);

        const config = {
          headers: { Authorization: `Bearer ${res.data.body.token}` },
        };
        axios
          .post("http://localhost:3001/api/v1/user/profile", {}, config)
          .then((res) => {
            console.log(res.data.body);
            dispatch({
              type: LOG_IN,
              payload: {
                firstName: res.data.body.firstName,
                lastName: res.data.body.lastName,
              },
            });
          });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
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
