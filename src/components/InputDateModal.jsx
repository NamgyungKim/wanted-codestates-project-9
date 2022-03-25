import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getSchedule } from '../redux/actions';

const InputDateModal = ({ setIsShowCalender }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const setNum = num => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };

  const clickSelectBtn = () => {
    const startDateText = `${startDate.getFullYear()}-${setNum(
      startDate.getMonth() + 1,
    )}-${setNum(startDate.getDate())}`;
    const endDateText = `${endDate.getFullYear()}-${setNum(
      endDate.getMonth() + 1,
    )}-${setNum(endDate.getDate())}`;

    dispatch(getSchedule('startDate', startDateText));
    dispatch(getSchedule('endDate', endDateText));
    setIsShowCalender(false);
  };

  return (
    <Modal>
      <Title>
        <h2>주소검색</h2>
        <IoIosClose size={35} onClick={() => setIsShowCalender(false)} />
      </Title>
      <Calender startDate={startDate} endDate={endDate}>
        <DatePicker
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          selectsRange
          inline
          monthsShown={2}
        />
      </Calender>
      <div>
        <div>
          <button onClick={clickSelectBtn}>선택완료</button>
        </div>
      </div>
    </Modal>
  );
};

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 10;
  > div:last-child {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 48px;
    > div {
      max-width: 768px;
      min-width: 320px;
      margin: auto;
    }
    div > button {
      width: 100%;
      height: 48px;
      border: 0;
      background-color: var(--main-color);
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
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

const Calender = styled.div`
  padding-bottom: 46px;
  .react-datepicker {
    width: 100%;
    border: none;
  }
  .react-datepicker__navigation {
    top: 30px;
  }
  .react-datepicker__navigation--previous {
  }
  .react-datepicker__month-container {
    width: 100%;
    margin-top: 32px;
  }
  .react-datepicker__current-month {
    height: 40px;
  }
  .react-datepicker__header {
    border-bottom: none;
    background-color: #fff;
  }
  .react-datepicker__day--today.react-datepicker__day {
    ::before {
      display: none;
    }
    ::after {
      display: block;
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: #000;
      border-radius: 50%;
      content: '';
      opacity: 0.1;
    }
  }

  .react-datepicker__week {
    display: flex;
    .react-datepicker__day {
      display: flex;
      height: 50px;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      border-radius: 0;
      margin: 0;
      font-size: 18px;
      :hover {
        background-color: #ffcfb5;
      }
    }

    .react-datepicker__day--range-start.react-datepicker__day--in-range,
    .react-datepicker__day--range-end.react-datepicker__day--in-range {
      background-color: #fff;
    }

    .react-datepicker__day--range-start,
    .react-datepicker__day--range-end {
      position: relative;
      ::before,
      ::after {
        position: absolute;
        display: block;
      }
      ::before {
        width: 50%;
        height: 50px;
        background-color: #ffcfb5;
        content: '';
      }
      ::after {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--main-color);
        line-height: 50px;
        opacity: 1;
      }
    }
    .react-datepicker__day--range-start {
      ::before {
        transform: translateX(51%);
      }
      ::after {
        content: '${props => props.startDate?.getDate()}';
      }
    }
    .react-datepicker__day--range-end {
      ::before {
        transform: translateX(-51%);
      }
      ::after {
        content: '${props => props.endDate?.getDate()}';
      }
    }
    .react-datepicker__day--range-start.react-datepicker__day--range-end {
      ::before {
        width: 0;
      }
    }
    .react-datepicker__day--in-range {
      background-color: #ffcfb5;
    }
    .react-datepicker__day--in-selecting-range {
      background-color: var(--dark-gray);
    }
  }
  .react-datepicker__day-names {
    display: flex;
    .react-datepicker__day-name {
      flex-grow: 1;
      font-size: 18px;
    }
  }
`;

InputDateModal.propTypes = {
  setIsShowCalender: PropTypes.func,
};

export default InputDateModal;
