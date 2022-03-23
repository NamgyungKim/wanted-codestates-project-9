import React, { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import GuideText from '../components/GuideText';

const Address = () => {
  const addressRef = useRef();
  const [addressValue, setAddressValue] = useState(false);

  setAddressValue;

  return (
    <Page>
      <GuideText />
      <Form>
        <div>
          <input
            ref={addressRef}
            type="text"
            placeholder="주소 또는 건물명으로 검색"
          />
          {addressValue ? <button>재검색</button> : null}
        </div>
        <input type="text" placeholder="상세주소를 입력해주세요" />
      </Form>
    </Page>
  );
};

const Page = styled.div`
  padding: 0 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  input {
    height: 48px;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    padding: 0 16px;
    margin-bottom: 8px;
    font-size: 14px;
    ::placeholder {
      color: var(--dark-gray);
    }
    :first-child {
      padding-left: 40px;
      background: url(../../image/search.svg) no-repeat 2% 50%/18px auto;
    }
  }

  button {
    width: 71px;
    height: 50px;
    background-color: var(--main-color);
    border: none;
    border-radius: 4px;
    margin-left: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }

  div {
    display: flex;
    > input {
      flex-grow: 1;
    }
  }

  @media screen and (min-width: 425px) {
    margin-top: 50px;
    input {
      font-size: 16px;
    }
    button {
      width: 100px;
      font-size: 16px;
    }
  }
`;

export default Address;
