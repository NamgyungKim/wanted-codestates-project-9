import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BottomBar = ({ process }) => {
  const url = useLocation().pathname;
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  console.log(isActive, process, setIsActive);

  const nextBtn = () => {
    if (!isActive) return;
    switch (url) {
      case '/type':
        navigate('/schedule');
        break;
      case '/schedule':
        navigate('/address');
        break;
      case '/address':
        navigate('/confirm');
        break;
      case '/confirm':
        navigate('/completion');
        break;
    }
  };

  return (
    <>
      {url === '/' || url === '/completion' ? null : (
        <Wrap>
          <Bar>
            <Previous onClick={() => navigate(-1)}>이전</Previous>
            <Next onClick={nextBtn} isActive={isActive}>
              다음
            </Next>
          </Bar>
        </Wrap>
      )}
    </>
  );
};

const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`;

const Bar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  min-width: 320px;
  height: 64px;
  padding: 0 8px;
  margin: auto;
  box-sizing: border-box;
  button {
    height: 48px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
  }
  @media screen and (min-width: 425px) {
    height: 70px;
    button {
      height: 62px;
      font-size: 18px;
    }
  }
`;

const Previous = styled.button`
  flex-grow: 1;
  background-color: #fff;
  margin-right: 8px;
  color: var(--light-text);
  cursor: pointer;
`;

const Next = styled.button`
  flex-grow: 8;
  background-color: ${props =>
    props.isActive ? 'var(--main-color)' : 'var(--gray)'};
  color: ${props => (props.isActive ? '#fff' : 'var(--dark-gray)')};
  cursor: ${props => (props.isActive ? 'pointer' : 'not-allowed')};
`;

BottomBar.propTypes = {
  process: PropTypes.object,
};

export default BottomBar;
