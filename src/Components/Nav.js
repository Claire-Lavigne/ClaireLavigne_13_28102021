import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Nav = () => (
  <SCNav>
    <SCNavLogo to="/">
      <img
        src={process.env.PUBLIC_URL + "/argentBankLogo.png"}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </SCNavLogo>
    <div>
      <SCNavLink to="/login">
        <FontAwesomeIcon icon={faUserCircle} />
        Sign In or Tony
      </SCNavLink>
      {/* Sign Out Link if connected */}
      <SCNavLink to="/">
        <FontAwesomeIcon icon={faSignOutAlt} />
        Sign Out
      </SCNavLink>
    </div>
  </SCNav>
);

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
