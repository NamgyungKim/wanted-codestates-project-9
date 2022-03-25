import { GET_SCHEDULE } from '../actions';

const initialState = {
  startDate: null,
  endDate: null,
  visitTime: null,
  hour: null,
};

export const schedule = (state = initialState, action) => {
  if (action.type === GET_SCHEDULE) {
    return { ...state, [action.key]: action.date };
  }
  return state;
};
