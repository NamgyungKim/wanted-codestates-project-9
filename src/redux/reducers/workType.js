import { GET_WORK_TYPE } from '../actions';

const initialState = null;

export const workType = (state = initialState, action) => {
  if (action.type === GET_WORK_TYPE) {
    return action.text;
  }
  return state;
};
