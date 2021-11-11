import React from "react";
import { Redirect } from "react-router-dom";
import datas from "../datas";
import Nav from "../Components/Nav";
import Account from "../Components/Account";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";

function UserProfile() {
  const userName = "Tony";
  const userLastname = "Jarvis";
  const isLogged = useSelector((state) => state.user.isLogged);

  if (!isLogged) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <SCHeader>
          <h1>
            Welcome back
            <br />
            {userName} {userLastname}!
          </h1>
          <SCBtnEdit>Edit Name</SCBtnEdit>
        </SCHeader>
        <h2 className="sr-only">Accounts</h2>
        {datas.account.map((item, index) => (
          <Account
            key={index}
            title={item.title}
            amount={item.amount}
            desc={item.desc}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default UserProfile;

const SCHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const SCBtnEdit = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;
