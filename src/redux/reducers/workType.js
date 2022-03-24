import { GET_WORK_TYPE } from '../actions';

const initialState = { workType: null };

export const workType = (state = initialState, action) => {
  if (action.type === GET_WORK_TYPE) {
    return { workType: action.text };
  }
  return state;
};
