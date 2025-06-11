import { combineReducers } from 'redux';
import email from './email';
import loading from './loading';

const rootReducer = combineReducers({ email, loading });
export default rootReducer;
