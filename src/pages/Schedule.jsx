import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import GuideText from '../components/GuideText';
import SelectOption from '../components/SelectOption';
import { staticData } from '../util/axios';

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
];

const Schedule = () => {
  const careHourRef = useRef();
  const startCareRef = useRef();
  const [careHours, setCareHours] = useState();
  const [showModal, setShowModal] = useState([]);

  useEffect(() => {
    const getStaticData = async () => {
      const data = await staticData();
      setCareHours(data.careHours);
    };
    getStaticData();
  }, []);

  return (
    <Page>
      <GuideText stap={2} text={'돌봄 스케줄을 설정해주세요'} />
      <Form>
        <InputDate>
          <FlexColumn>
            <label htmlFor="startDay">시작일</label>
            <input type="date" />
            <InputDataBtn>날짜 선택</InputDataBtn>
          </FlexColumn>

          <FlexColumn>
            <label htmlFor="endDay">종료일</label>
            <input type="date" />
            <InputDataBtn>날짜 선택</InputDataBtn>
          </FlexColumn>
        </InputDate>
        <FlexColumn>
          <label htmlFor="startCare">돌봄 시작 시간</label>
          <select ref={startCareRef} name="startTime">
            <option value="">선택</option>
            {startTime.map(data => (
              <option key={data.value} value={data.value}>
                {data.text}
              </option>
            ))}
          </select>
          <SelectBox onClick={() => setShowModal(startTime)}>선택</SelectBox>
        </FlexColumn>
        <FlexColumn>
          <label htmlFor="careHours">하루 돌봄 시간</label>
          <select ref={careHourRef} name="careHours">
            <option value="">선택</option>
            {careHours?.map(data => (
              <option key={data.value} value={data.value}>
                {data.text}
              </option>
            ))}
          </select>
          <SelectBox onClick={() => setShowModal(careHours)}>선택</SelectBox>
        </FlexColumn>
      </Form>
      {showModal.length == 0 ? null : (
        <SelectOption showModal={showModal} setShowModal={setShowModal} />
      )}
    </Page>
  );
};

const Page = styled.div`
  padding: 0 16px;
`;

const Form = styled.div`
  margin-top: 32px;
  select,
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
  color: var(--dark-gray);
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
