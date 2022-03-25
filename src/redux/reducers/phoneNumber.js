import { GET_PHONE_NUM } from '../actions';

const initialState = null;

export const phoneNumber = (state = initialState, action) => {
  if (action.type === GET_PHONE_NUM) {
    return action.num;
  }
  return state;
};
