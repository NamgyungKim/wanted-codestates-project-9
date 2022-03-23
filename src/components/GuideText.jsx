import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GuideText = ({ stap, text }) => {
  return (
    <TextBox>
      <p>
        돌봄 유형
        <span>
          <span>{stap} </span>/ 4
        </span>
      </p>
      <h2>{text}</h2>
    </TextBox>
  );
};

const TextBox = styled.div`
  font-weight: bold;
  line-height: 26px;

  margin-top: 32px;
  p {
    font-size: 16px;
    > span {
      margin-left: 8px;
      font-size: 12px;
      > span {
        color: var(--main-color);
      }
    }
  }
  h2 {
    margin-top: 8px;
    font-size: 24px;
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
    }
  }
`;

GuideText.propTypes = {
  stap: PropTypes.number,
  text: PropTypes.string,
};

export default GuideText;
