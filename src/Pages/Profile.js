import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import datas from "../datas";
import Nav from "../Components/Nav";
import Account from "../Components/Account";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";

function UserProfile() {
  const [displayName, setDisplayName] = useState(true);
  const userFirstName = useSelector((state) => state.user.userFirstName);
  const userLastName = useSelector((state) => state.user.userLastName);
  const isLogged = useSelector((state) => state.user.isLogged);

  const onEditName = (e) => {
    e.preventDefault();
    setDisplayName(false);
  };

  if (!isLogged) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        {displayName ? (
          <SCHeader>
            <h1>
              Welcome back
              <br />
              {userFirstName} {userLastName}!
            </h1>
            <SCBtnEdit onClick={onEditName}>Edit Name</SCBtnEdit>
          </SCHeader>
        ) : (
          <SCHeader>
            <h1>Welcome back</h1>
            <div className="inputsFLEX">
              <SCInputText
                type="text"
                name="firstName"
                id="firstName"
                placeholder={userFirstName}
              />
              <SCInputText
                type="text"
                name="lastName"
                id="lastName"
                placeholder={userLastName}
              />
            </div>
            <div className="inputsFLEX">
              <SCBtnEdition type="submit">Save</SCBtnEdition>
              <SCBtnEdition type="submit">Cancel</SCBtnEdition>
            </div>
          </SCHeader>
        )}
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

const SCInputText = styled.input`
  border-color: grey;
  color: grey;
  font-weight: bold;
  padding: 10px;
`;

const SCBtnEdition = styled.button`
  border-color: violet;
  background-color: #fff;
  color: violet;
  font-weight: bold;
  padding: 10px;
`;
