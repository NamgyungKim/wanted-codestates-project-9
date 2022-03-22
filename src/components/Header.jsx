import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';

// import PropTypes from 'prop-types';

const Header = () => {
  const url = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <>
      {url === '/' ? null : (
        <Wrap>
          <HeaderBar>
            {url === '/completion' ? null : (
              <i onClick={() => navigate(-1)}>
                <IoIosArrowBack size={24} />
              </i>
            )}
            <h1>돌보미 신청하기</h1>
          </HeaderBar>
        </Wrap>
      )}
    </>
  );
};

const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`;
const HeaderBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  min-width: 320px;
  height: 56px;
  margin: auto;
  background-color: #fff;
  i {
    position: absolute;
    padding: 10px;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  h1 {
    font-weight: bold;
    font-size: 16px;
  }

  @media screen and (min-width: 425px) {
    height: 64px;
    h1 {
      font-size: 20px;
    }
  }
`;

Header.propTypes = {};

export default Header;
