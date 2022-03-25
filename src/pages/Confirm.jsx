import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import GuideText from '../components/GuideText';
import { getPhoneNum } from '../redux/actions';

const Confirm = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const store = useSelector(state => state);

  const typeCheck = e => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    dispatch(getPhoneNum(onlyNumber));
    inputRef.current.value = onlyNumber;
  };

  const transformDateForm = date => {
    const dateArr = date.split('-');
    return `${dateArr[0]}년 ${dateArr[1]}월 ${dateArr[2]}일`;
  };
  const transformTimeForm = time => {
    const hour = time.split(':')[0];
    if (hour < 12) {
      return `오전 ${hour}시`;
    } else {
      return `오후 ${hour - 12}시`;
    }
  };

  useEffect(() => {
    if (!store.phoneNumber) return;
    inputRef.current.value = store.phoneNumber;
  }, []);

  return (
    <Page>
      <GuideText />
      <Box>
        <div>
          <h3>신청내역</h3>
        </div>
        <div>
          <h4>돌봄 유형</h4>
          <p>
            {store.workType === 'Time'
              ? '⏰ 시간제 돌봄'
              : store.workType === 'Day'
              ? '🌞 24시간 상주'
              : '유형이 없습니다.'}
          </p>
        </div>

        <hr />

        <div>
          <h4>돌봄 일정</h4>
          <p>
            {transformDateForm(store.schedule.startDate)} ~{' '}
            {transformDateForm(store.schedule.endDate)}
          </p>
          <p>{transformTimeForm(store.schedule.visitTime)} 부터</p>
          <p>{store.schedule.hour}시간</p>
        </div>

        <hr />

        <div>
          <h4>돌봄 주소</h4>
          <p>{store.address.roadAddress}</p>
          <p className="small">
            <span>지번</span>
            {store.address.jibunAddress}
          </p>
          <p>{store.address.addressDetail}</p>
        </div>
      </Box>
      <input
        ref={inputRef}
        onChange={typeCheck}
        type="tel"
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
