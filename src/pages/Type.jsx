import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import GuideText from '../components/GuideText';
import { getWorkType } from '../redux/actions';

const Type = () => {
  const dispatch = useDispatch();

  const clickRadioBtn = select => {
    dispatch(getWorkType(select));
  };

  return (
    <Page>
      <GuideText />
      <Box>
        <FullTime htmlFor="fullTime">
          <input type="radio" name="type" id="fullTime" />
          <div onClick={() => clickRadioBtn('Day')}>
            <i>🌞</i>
            <p>24시간 상주</p>
          </div>
        </FullTime>
        <PartTime htmlFor="partTime">
          <input
            onClick={() => clickRadioBtn('Time')}
            type="radio"
            name="type"
            id="partTime"
          />
          <div>
            <i>⏰</i>
            <p>시간제 돌봄</p>
          </div>
        </PartTime>
      </Box>
    </Page>
  );
};

const Page = styled.div`
  padding: 0 16px;
`;

const Box = styled.div`
  display: flex;
  margin-top: 32px;
  label {
    flex-grow: 1;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 144px;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + div {
    background-color: var(--main-color);
    color: #fff;
  }
  i {
    font-size: 48px;
  }

  p {
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
  }

  @media screen and (min-width: 425px) {
    margin-top: 50px;

    div {
      height: 220px;
      border: 2px solid var(--light-gray);
      border-radius: 10px;
    }
    i {
      font-size: 70px;
    }
    p {
      margin-top: 30px;
      font-size: 18px;
    }
  }
`;

const FullTime = styled.label`
  margin-right: 8px;
  i {
  }
`;

const PartTime = styled.label`
  i {
  }
`;

export default Type;
