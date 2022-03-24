import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import GuideText from '../components/GuideText';

const Confirm = () => {
  const inputRef = useRef();
  const [phonNum, setPhonNum] = useState('');

  const typeCheck = e => {
    if (!/[0-9]/g.test(e.nativeEvent.data)) return;
    setPhonNum(phonNum + e.nativeEvent.data);
  };

  return (
    <Page>
      <GuideText />
      <Box>
        <div>
          <h3>신청내역</h3>
        </div>
        <div>
          <h4>돌봄 유형</h4>
          <p>⏰ 시간제 돌봄</p>
        </div>

        <hr />

        <div>
          <h4>돌봄 일정</h4>
          <p>2022년 1월 12일 ~ 22년 1월 23일</p>
          <p>오전 10시부턴</p>
          <p>8시간</p>
        </div>

        <hr />

        <div>
          <h4>돌봄 주소</h4>
          <p>서울특별시 강남구 테헤란로 77길 9 (삼성동)</p>
          <p className="small">
            <span>지번</span>서울특별시 강남구 삼성동 143-27
          </p>
          <p>케어닥주공아파트 102동 1204호</p>
        </div>
      </Box>
      <input
        ref={inputRef}
        onChange={typeCheck}
        value={phonNum}
        type="text"
        placeholder="전화번호를 입력해주세요 (숫자만 입력해주세요.)"
      />
    </Page>
  );
};

const Page = styled.div`
  padding: 0 16px;
  input {
    display: flex;
    height: 48px;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    padding: 0 16px;
    margin-top: 32px;
    width: 100%;
    font-size: 14px;
    box-sizing: border-box;
    ::placeholder {
      color: var(--dark-gray);
    }
  }
  @media screen and (min-width: 425px) {
    input {
      height: 60px;
      font-size: 16px;
    }
  }
`;
const Box = styled.div`
  margin-top: 32px;
  padding: 32px 16px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  h3,
  h4 {
    color: var(--text);
    font-weight: bold;
  }
  h3 {
    line-height: 26px;
  }
  h4 {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 20px;
  }
  div {
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
    color: var(--text);
  }
  .small {
    color: var(--light-text);
    font-size: 12px;
    span {
      display: inline-block;
      width: 35px;
      height: 20px;
      background-color: var(--light-gray);
      border-radius: 20px;
      margin-right: 8px;
      font-size: 10px;
      text-align: center;
    }
  }
  hr {
    border-top: 0.5px solid #f6f6f6;
  }

  @media screen and (min-width: 425px) {
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
    .small {
      font-size: 14px;
    }
    div {
      margin: 20px 0;
    }
  }
`;

export default Confirm;
