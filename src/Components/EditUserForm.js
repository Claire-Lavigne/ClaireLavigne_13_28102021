import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { LOG_IN } from "../reducers/isLogged";
import styled from "styled-components";

function EditUserForm({ token, userFirstName, userLastName, setDisplayName }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [save, setSave] = useState(false);

  const dispatch = useDispatch();

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
          console.log("edit user form response", res.data.body);
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

  return (
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
      <SCBtnEdition onClick={() => setSave(false)}>Cancel</SCBtnEdition>
    </form>
  );
}

export default EditUserForm;

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
