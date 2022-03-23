import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Completion = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <h2>📱 신청이 완료되었습니다!</h2>
      <p>
        신청하신 내용을 보고 케어코디님들이 지원할 예정입니다. <br />
        케어코디님들이 신청할 때 마다 앱이나 문자로 알림을 보내드립니다. <br />
        케어코디님의 지원 알림을 기다려주세요!
      </p>
      <button onClick={() => navigate('/')}>끝내기</button>
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
