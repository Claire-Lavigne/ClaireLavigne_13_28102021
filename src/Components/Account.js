import React from "react";
import styled from "styled-components";

const Account = ({ title, amount, desc }) => (
  <SCAccount>
    <SCAccountContent>
      <SCAccountTitle>{title}</SCAccountTitle>
      <p className="amount">${amount}</p>
      <p className="amount-desc">{desc}</p>
    </SCAccountContent>
    <SCAccountContent className="cta">
      <SCBtnTransaction>View transactions</SCBtnTransaction>
    </SCAccountContent>
  </SCAccount>
);

export default Account;

const SCAccount = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const SCAccountContent = styled.div`
  width: 100%;
  flex: 1;
  &.cta {
    @media (min-width: 720px) {
      flex: 0;
    }
  }
  .amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }
  .amount-desc {
    margin: 0;
  }
`;

const SCAccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const SCBtnTransaction = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  @media (min-width: 720px) {
    width: 200px;
  }
`;
