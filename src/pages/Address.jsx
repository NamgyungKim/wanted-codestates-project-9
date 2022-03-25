import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AddressSearchModal from '../components/AddressSearchModal';
import GuideText from '../components/GuideText';
import { getAddress } from '../redux/actions';

const Address = () => {
  const dispatch = useDispatch();
  const addressRef = useRef();
  const detailAddressRef = useRef();

  const store = useSelector(state => state.address);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    addressRef.current.value = store.roadAddress;
    detailAddressRef.current.value = store.addressDetail;
  }, [store]);

  return (
    <Page>
      <GuideText />
      <Form>
        <div>
          <div onClick={() => setIsShowModal(true)}>
            <input
              ref={addressRef}
              type="text"
              placeholder="주소 또는 건물명으로 검색"
              disabled
            />
          </div>
          {store.roadAddress ? (
            <button onClick={() => setIsShowModal(true)} type="button">
              재검색
            </button>
          ) : null}
        </div>
        <input
          ref={detailAddressRef}
          type="text"
          placeholder="상세주소를 입력해주세요"
          onChange={() =>
            dispatch(
              getAddress('addressDetail', detailAddressRef.current.value),
            )
          }
        />
      </Form>
      {isShowModal ? (
        <AddressSearchModal setIsShowModal={setIsShowModal} />
      ) : null}
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
    cursor: pointer;
  }

  > div {
    display: flex;
    > div {
      flex-grow: 1;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
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
