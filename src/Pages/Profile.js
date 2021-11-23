import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import datas from "../datas";
import Nav from "../Components/Nav";
import Account from "../Components/Account";
import Footer from "../Components/Footer";
import { LOG_IN } from "../reducers/isLogged";
import styled from "styled-components";

function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState(true);
  const [save, setSave] = useState(false);
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

  const onSubmit = (e) => {
    e.preventDefault();

    if (save) {
      const data = {
        firstName,
        lastName,
      };
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .put("http://localhost:3001/api/v1/user/profile", data, config)
        .then((res) => {
          console.log("profile response", res.data.body);
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
    }
    setDisplayName(true);
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
        console.log("login form response", res.data.body);
        dispatch({
          type: LOG_IN,
          payload: {
            firstName: res.data.body.firstName,
            lastName: res.data.body.lastName,
          },
        });
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
              <form onSubmit={onSubmit} autoComplete="false">
                <div>
                  <SCInputText
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder={userFirstName}
                    onChange={(e) => setFirstName(e.target.value.trim())}
                  />
                  <SCInputText
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder={userLastName}
                    onChange={(e) => setLastName(e.target.value.trim())}
                  />
                </div>
                <SCBtnEdition onClick={() => setSave(true)}>Save</SCBtnEdition>
                <SCBtnEdition onClick={() => setSave(false)}>
                  Cancel
                </SCBtnEdition>
              </form>
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

const SCInputText = styled.input`
  border-color: #b8c4ce;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 5px;
  ::placeholder {
    color: #b8c4ce;
  }
  ::focus {
    color: #2c3e50;
    outline: none;
    box-shadow: none;
  }
`;

const SCBtnEdition = styled.button`
  border-color: #6458f5;
  background-color: #fff;
  color: #6458f5;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  margin: 0 5px;
  width: 120px;
`;
