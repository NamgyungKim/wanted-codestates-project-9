import { GET_ADDRESS } from '../actions';

const initialState = {
  addressDetail: null,
  jibunAddress: null,
  liName: null,
  locationCode: null,
  roadCode: null,
  myundongName: null,
  roadAddress: null,
  sidoName: null,
  sigunguName: null,
};

export const address = (state = initialState, action) => {
  if (action.type === GET_ADDRESS) {
    return { ...state, [action.key]: action.data };
  }
  return state;
};
