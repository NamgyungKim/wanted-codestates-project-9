import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  return (
    <Page>
      <h1>
        <p>어르신 돌보미</p>
        <span>케어코디</span>
      </h1>
      <Link to="/type">
        <button>신청하기</button>
      </Link>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 32px;
    line-height: 1.5;
    text-align: center;
    span {
      color: var(--main-color);
      font-weight: bold;
    }
  }
  button {
    background-color: var(--main-color);
    width: 184px;
    height: 56px;
    border: none;
    border-radius: 40px;
    margin-top: 32px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (min-width: 425px) {
    h1 {
      font-size: 40px;
    }
    button {
      width: 200px;
      height: 70px;
      font-size: 22px;
    }
  }
`;

export default Main;
