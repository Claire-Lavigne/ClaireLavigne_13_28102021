import React from "react";
import Nav from "../Components/Nav";
import LoginForm from "../Components/LoginForm";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function Login() {
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <SCSectionSignIn>
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign In</h1>
          <LoginForm />
        </SCSectionSignIn>
      </main>
      <Footer />
    </>
  );
}

export default Login;

const SCSectionSignIn = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;
