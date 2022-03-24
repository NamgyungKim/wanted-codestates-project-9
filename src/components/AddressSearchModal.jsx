import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';

const AddressSearchModal = ({ setIsShowModal }) => {
  const [addressArr, setAddressArr] = useState([23]);

  setAddressArr;

  return (
    <Modal>
      <SearchBox>
        <Title>
          <h2>주소검색</h2>
          <IoIosClose onClick={() => setIsShowModal(false)} size={35} />
        </Title>
        <input type="text" placeholder="주소 또는 건물명으로 검색" />
        {addressArr.length === 0 ? (
          <Inform>
            <p>
              찾으시려는 도로명 주소의 건물번호 또는 시설명까지 상세히 입력 후
              검색해주세요.
            </p>
            <p>예) 중앙동, 불정로432번길</p>
          </Inform>
        ) : (
          <AddressData>
            <li>
              <div>
                <h4>서울특별시 강남구 테헤란로 77길 9 (삼성동)</h4>
                <p className="small">
                  <span>지번</span>서울특별시 강남구 삼성동 143-27
                </p>
              </div>
              <span>06284</span>
            </li>
            <li>
              <div>
                <h4>서울특별시 강남구 테헤란로 77길 9 (삼성동)</h4>
                <p className="small">
                  <span>지번</span>서울특별시 강남구 삼성동 143-27
                </p>
              </div>
              <span>06284</span>
            </li>
            <li>
              <div>
                <h4>서울특별시 강남구 테헤란로 77길 9 (삼성동)</h4>
                <p className="small">
                  <span>지번</span>서울특별시 강남구 삼성동 143-27
                </p>
              </div>
              <span>06284</span>
            </li>
          </AddressData>
        )}
      </SearchBox>
      <Inform>
        · 기본주소 선택 후 상세주소를 반드시 입력해주세요. 상세주소가 없는 경우
        주소지 특징을 입력해주세요. <br />· 2016년 8월 1일부터는 5가지 우편번호
        사용이 의무화됩니다. 도로명주소 + 5자리 우편번호로 등록하셔서 서비스
        이용에 불편함이 없도록 하시길 바랍니다.
      </Inform>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
  z-index: 10;
`;

const SearchBox = styled.div`
  background-color: #fff;
  input {
    width: calc(100% - 32px);
    height: 48px;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    padding: 0 16px 0 40px;
    margin: 0 16px 8px;
    background: url(../../image/search.svg) no-repeat 12px 50%/18px auto;
    font-size: 14px;
    box-sizing: border-box;
    ::placeholder {
      color: var(--dark-gray);
    }
  }
`;

const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  text-align: center;
  h2 {
    font-weight: bold;
  }
  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  @media screen and (min-width: 425px) {
    height: 60px;
  }
`;

const AddressData = styled.ul`
  li {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 16px;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
    :hover {
      background-color: var(--light-gray);
    }
  }
  div {
    flex-grow: 1;
    margin-right: 16px;
  }
  h4 {
    color: var(--text);
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
  }
  .small {
    color: var(--light-text);
    font-size: 12px;
    span {
      display: inline-block;
      width: 35px;
      height: 20px;
      background-color: #f6f6f6;
      border-radius: 20px;
      margin-right: 8px;
      font-size: 10px;
      text-align: center;
    }
  }
  p {
    font-size: 14px;
    line-height: 1.5;
    color: var(--text);
  }
  > span {
    font-weight: bold;
    font-size: 14px;
  }
  @media screen and (min-width: 425px) {
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 16px;
    }
    .small {
      font-size: 14px;
    }
  }
`;

const Inform = styled.p`
  padding: 32px 16px;
  color: var(--dark-gray);
  font-size: 12px;
  line-height: 1.5;
  p {
    text-align: center;
  }
  @media screen and (min-width: 425px) {
    padding: 40px 20px;
    font-size: 14px;
  }
`;

AddressSearchModal.propTypes = {
  setIsShowModal: PropTypes.func,
};

export default AddressSearchModal;
