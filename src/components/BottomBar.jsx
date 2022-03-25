import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const BottomBar = () => {
  const store = useSelector(state => state);
  const url = useLocation().pathname;
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  // 유효성 검사
  useEffect(() => {
    switch (url) {
      case '/type':
        store.workType ? setIsActive(true) : setIsActive(false);
        break;
      case '/schedule':
        for (const item in store.schedule) {
          if (!store.schedule[item]) {
            if (store.workType === 'DAY' && item === 'hour') return;
            setIsActive(false);
            return;
          }
          setIsActive(true);
        }
        break;
      case '/address':
        if (store.address.addressDetail && store.address.roadAddress) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
        break;
      case '/confirm':
        store.phoneNumber ? setIsActive(true) : setIsActive(false);
        break;
    }
  }, [url, store]);

  useEffect(() => {
    if (url !== '/' && !store.workType) {
      navigate('/type');
    }
  }, []);

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

  const previousBnt = () => {
    switch (url) {
      case '/type':
        navigate('/');
        break;
      case '/schedule':
        navigate('/type');
        break;
      case '/address':
        navigate('/schedule');
        break;
      case '/confirm':
        navigate('/address');
        break;
    }
  };

  return (
    <>
      {url === '/' || url === '/completion' ? null : (
        <Wrap>
          <Bar>
            <Previous onClick={previousBnt}>이전</Previous>
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
  background-color: #fff;
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
