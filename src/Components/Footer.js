import React from "react";
import styled from "styled-components";

const Footer = () => (
  <SCFooter>
    <p>Copyright 2020 Argent Bank</p>
  </SCFooter>
);

export default Footer;

const SCFooter = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
  p {
    margin: 0;
    padding: 0;
  }
`;
