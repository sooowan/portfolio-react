import { combineReducers } from 'redux';
import email from './email';
import loading from './loading';
import weather from './weather';

const rootReducer = combineReducers({ email, loading, weather });
export default rootReducer;
