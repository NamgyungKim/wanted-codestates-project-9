import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const staticData = [
  {
    step: 1,
    subtitle: '돌봄 유형',
    title: '돌봄 유형을 설정해주세요',
  },
  {
    step: 2,
    subtitle: '돌봄 스케줄',
    title: '돌봄 스케줄을 설정해주세요',
  },
  {
    step: 3,
    subtitle: '돌봄 주소',
    title: '돌봄 주소를 입력해주세요',
  },
  {
    step: 4,
    subtitle: '신청 완료',
    title: `인증하신 휴대폰 번호로
            케어코디 프로필을
            받아보실 수 있어요 ☺️`,
  },
];

const GuideText = () => {
  const url = useLocation().pathname;
  const [currentData, setCurrentData] = useState({});
  useEffect(() => {
    switch (url) {
      case '/type':
        setCurrentData(staticData[0]);
        break;
      case '/schedule':
        setCurrentData(staticData[1]);
        break;
      case '/address':
        setCurrentData(staticData[2]);
        break;
      case '/confirm':
        setCurrentData(staticData[3]);
        break;
    }
  }, [url]);

  return (
    <TextBox>
      <p>
        {currentData.subtitle}
        <span>
          <span>{currentData.step} </span>/ 4
        </span>
      </p>
      <h2>{currentData.title}</h2>
    </TextBox>
  );
};

const TextBox = styled.div`
  font-weight: bold;
  line-height: 26px;
  margin-top: 32px;
  p {
    font-size: 16px;
    color: var(--text);
    > span {
      margin-left: 8px;
      font-size: 12px;
      > span {
        color: var(--main-color);
      }
    }
  }
  h2 {
    width: 400px;
    margin-top: 8px;
    font-size: 24px;
    line-height: 36px;
    color: var(--text);
    word-break: keep-all;
  }

  @media screen and (min-width: 425px) {
    p {
      font-size: 16px;
      span {
        font-size: 16px;
      }
    }
    h2 {
      margin-top: 14px;
      font-size: 28px;
      line-height: 40px;
      max-width: 584px;
    }
  }
`;

export default GuideText;
