import { combineReducers } from 'redux';
import { workType } from './workType';
import { schedule } from './schedule';

const reducer = combineReducers({ workType, schedule });

export default reducer;
