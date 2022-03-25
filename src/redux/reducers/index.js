import { combineReducers } from 'redux';
import { workType } from './workType';
import { schedule } from './schedule';
import { address } from './address';
import { phoneNumber } from './phoneNumber';

const reducer = combineReducers({ workType, schedule, address, phoneNumber });

export default reducer;
