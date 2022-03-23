import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoClose } from 'react-icons/io5';

const SelectOption = ({ showModal, setShowModal }) => {
  const selectTime = value => {
    console.log(value);
  };

  return (
    <Background showModal={showModal}>
      <Box showModal={showModal}>
        <p>
          돌봄 시작 시간 선택
          <IoClose onClick={() => setShowModal([])} size={30} />
        </p>
        <ul>
          {showModal.map(option => (
            <li onClick={() => selectTime(option.value)} key={option.value}>
              {option.text}
            </li>
          ))}
        </ul>
      </Box>
    </Background>
  );
};

const Box = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 556px;
  background-color: #fff;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  animation-name: slide;
  animation-duration: 0.5s;
  p {
    height: 76px;
    padding: 32px 16px 0;
    font-size: 18px;
    font-weight: bold;
    box-sizing: border-box;
  }
  li {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 48px;
    cursor: pointer;
    :hover {
      background-color: var(--light-gray);
    }
  }
  svg {
    position: absolute;
    top: 28px;
    right: 18px;
    cursor: pointer;
  }
  @keyframes slide {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 10;
`;

SelectOption.propTypes = {
  showModal: PropTypes.array,
  setShowModal: PropTypes.func,
};

export default SelectOption;
