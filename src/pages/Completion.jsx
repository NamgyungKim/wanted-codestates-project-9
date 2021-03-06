import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Completion = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <h2>π± μ μ²­μ΄ μλ£λμμ΅λλ€!</h2>
      <p>
        μ μ²­νμ  λ΄μ©μ λ³΄κ³  μΌμ΄μ½λλλ€μ΄ μ§μν  μμ μλλ€. <br />
        μΌμ΄μ½λλλ€μ΄ μ μ²­ν  λ λ§λ€ μ±μ΄λ λ¬Έμλ‘ μλ¦Όμ λ³΄λ΄λλ¦½λλ€. <br />
        μΌμ΄μ½λλμ μ§μ μλ¦Όμ κΈ°λ€λ €μ£ΌμΈμ!
      </p>
      <button onClick={() => navigate('/')}>λλ΄κΈ°</button>
    </Page>
  );
};

const Page = styled.div`
  padding: 0 16px;
  h2 {
    margin-top: 24px;
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    line-height: 36px;
  }
  p {
    color: var(--light-text);
    font-size: 14px;
    line-height: 20px;
  }
  button {
    display: block;
    width: 71px;
    height: 48px;
    border: 1px solid var(--gray);
    border-radius: 4px;
    margin: 32px auto 0;
    background-color: #fff;
    color: var(--light-text);
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
  }
  @media screen and (min-width: 425px) {
    padding: 0 40px;
    margin-top: 100px;
    h2 {
      font-size: 28px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      line-height: 1.5;
    }
    button {
      width: 100px;
      height: 60px;
      font-size: 18px;
      margin-top: 100px;
    }
  }
`;

export default Completion;
