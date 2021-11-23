import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import datas from "../datas";
import Nav from "../Components/Nav";
import EditUserForm from "../Components/EditUserForm";
import Account from "../Components/Account";
import Footer from "../Components/Footer";
import { LOG_IN } from "../reducers/isLogged";
import styled from "styled-components";

function UserProfile() {
  const [displayName, setDisplayName] = useState(true);
  const userFirstName = useSelector((state) => state.user.firstName);
  const userLastName = useSelector((state) => state.user.lastName);
  const sessionToken = sessionStorage.getItem("token");
  const localToken = localStorage.getItem("token");

  let token;
  if (localToken) {
    token = localToken;
  }
  if (sessionToken) {
    token = sessionToken;
  }

  const dispatch = useDispatch();

  const onEditName = () => {
    setDisplayName(false);
  };

  // keep page if actualise
  if (!token) {
    return <Redirect to="/login" />;
  } else {
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post("http://localhost:3001/api/v1/user/profile", {}, config)
      .then((res) => {
        console.log("get user infos", res.data.body);
        dispatch({
          type: LOG_IN,
          payload: {
            firstName: res.data.body.firstName,
            lastName: res.data.body.lastName,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
              <EditUserForm
                token={token}
                userFirstName={userFirstName}
                userLastName={userLastName}
                setDisplayName={setDisplayName}
              />
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
