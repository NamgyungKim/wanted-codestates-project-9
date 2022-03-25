import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GuideText from '../components/GuideText';
import InputDateModal from '../components/InputDateModal';
import SelectOption from '../components/SelectOption';

const startTime = [
  { value: '08:00:00', text: '오전8시' },
  { value: '09:00:00', text: '오전9시' },
  { value: '10:00:00', text: '오전10시' },
  { value: '11:00:00', text: '오전11시' },
  { value: '12:00:00', text: '오전12시' },
  { value: '13:00:00', text: '오후1시' },
  { value: '14:00:00', text: '오후2시' },
  { value: '15:00:00', text: '오후3시' },
  { value: '16:00:00', text: '오후4시' },
  { value: '17:00:00', text: '오후5시' },
  { value: '18:00:00', text: '오후6시' },
  { value: '19:00:00', text: '오후7시' },
  { value: '20:00:00', text: '오후8시' },
  { value: '21:00:00', text: '오후9시' },
];

const careHours = [
  {
    value: 3,
    text: '3시간',
    disabled: false,
  },
  {
    value: 4,
    text: '4시간',
    disabled: false,
  },
  {
    value: 5,
    text: '5시간',
    disabled: false,
  },
  {
    value: 6,
    text: '6시간',
    disabled: false,
  },
  {
    value: 7,
    text: '7시간',
    disabled: false,
  },
  {
    value: 8,
    text: '8시간',
    disabled: false,
  },
  {
    value: 9,
    text: '9시간',
    disabled: false,
  },
];

const Schedule = () => {
  const [modalType, setModalType] = useState('');
  const [modalData, setModalData] = useState([]);
  const [isShowCalender, setIsShowCalender] = useState(false);

  const store = useSelector(state => state.schedule);

  const careHoursText = () => {
    for (const item of startTime) {
      if (item.value === store.visitTime) {
        return item.text;
      }
    }
  };

  return (
    <Page>
      <GuideText />
      <Form>
        <InputDate>
          <FlexColumn>
            <label htmlFor="startDay">시작일</label>
            <input type="date" />
            <InputDataBtn onClick={() => setIsShowCalender(true)}>
              {store.startDate ?? '날짜 선택'}
            </InputDataBtn>
          </FlexColumn>

          <FlexColumn>
            <label htmlFor="endDay">종료일</label>
            <input type="date" />
            <InputDataBtn onClick={() => setIsShowCalender(true)}>
              {store.endDate ?? '날짜 선택'}
            </InputDataBtn>
          </FlexColumn>
        </InputDate>
        <FlexColumn>
          <label htmlFor="startCare">돌봄 시작 시간</label>
          <SelectBox
            onClick={() => {
              setModalData(startTime), setModalType('visitTime');
            }}
          >
            {store.visitTime ? careHoursText() : '선택'}
          </SelectBox>
        </FlexColumn>
        <FlexColumn>
          <label htmlFor="careHours">하루 돌봄 시간</label>
          <SelectBox
            onClick={() => {
              setModalData(careHours), setModalType('hour');
            }}
          >
            {store.hour ? `${store.hour} 시간` : '선택'}
          </SelectBox>
        </FlexColumn>
      </Form>
      {modalData.length == 0 ? null : (
        <SelectOption
          data={modalData}
          setModalData={setModalData}
          type={modalType}
        />
      )}
      {isShowCalender ? (
        <InputDateModal setIsShowCalender={setIsShowCalender} />
      ) : null}
    </Page>
  );
};

const Page = styled.div`
  padding: 0 16px;
`;

const Form = styled.div`
  margin-top: 32px;
  input {
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    margin: 0;
    border: none;
  }
  label {
    margin: 8px 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
  }
`;

const InputDataBtn = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  padding: 14px 16px;
  background-color: var(--light-gray);
  box-sizing: border-box;
  color: var(--text);
  font-weight: bold;
  cursor: pointer;
  ::after {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 20px;
    height: 22px;
    background: url('../../image/calenderIcon.png') no-repeat 98% 50%/20px auto;
    transform: translateY(-50%);
    z-index: 0;
    content: '';
  }
`;

const SelectBox = styled.div`
  height: 48px;
  border: none;
  border-radius: 4px;
  padding: 14px 16px;
  background: var(--light-gray) url(../../image/chevronDown.png) no-repeat 97%
    50%/15px auto;
  box-sizing: border-box;
  font-weight: bold;
  color: var(--text);
  cursor: pointer;
  appearance: none;
`;

const InputDate = styled.div`
  display: flex;
  > div {
    flex-grow: 1;
    :first-child {
      margin-right: 8px;
    }
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export default Schedule;
