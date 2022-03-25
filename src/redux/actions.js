export const GET_WORK_TYPE = 'GET_WORK_TYPE';
export const GET_SCHEDULE = 'GET_SCHEDULE_START_DAY';
export const GET_ADDRESS = 'GET_ADDRESS';
export const GET_PHONE_NUM = 'GET_PHONE_NUM';

export const getWorkType = text => {
  return {
    type: GET_WORK_TYPE,
    text,
  };
};

export const getSchedule = (key, date) => {
  return {
    type: GET_SCHEDULE,
    date,
    key,
  };
};

export const getAddress = (key, data) => {
  return {
    type: GET_ADDRESS,
    data,
    key,
  };
};

export const getPhoneNum = num => {
  return {
    type: GET_PHONE_NUM,
    num,
  };
};
