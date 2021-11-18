import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { LOG_OUT } from "../reducers/isLogged";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Nav = () => {
  const userFirstName = useSelector((state) => state.user.firstName);
  const isLoggedIn = useSelector((state) => state.user.isLogged);
  const sessionToken = sessionStorage.getItem("token");
  const localToken = localStorage.getItem("token");
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({ type: LOG_OUT });

    sessionStorage.getItem("token") && sessionStorage.removeItem("token");
  };

  return (
    <SCNav>
      <SCNavLogo to="/">
        <img
          src={process.env.PUBLIC_URL + "/argentBankLogo.png"}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </SCNavLogo>
      <div>
        {isLoggedIn && (sessionToken || localToken) ? (
          <>
            <SCNavLink to="/profile">
              <FontAwesomeIcon icon={faUserCircle} />
              {userFirstName}
            </SCNavLink>
            <SCNavLink to="/" onClick={onClick}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
            </SCNavLink>
          </>
        ) : (
          <SCNavLink to="/login">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </SCNavLink>
        )}
      </div>
    </SCNav>
  );
};

export default Nav;

const SCNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const SCNavLogo = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
  img {
    max-width: 100%;
    width: 200px;
  }
`;

const SCNavLink = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 0.5rem;
  &.active {
    color: #42b983;
  }
  &:hover {
    text-decoration: underline;
  }
`;
