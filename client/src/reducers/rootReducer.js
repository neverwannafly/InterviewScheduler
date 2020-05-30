import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducers';
import noticeReducer from './notice';


const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  notice: noticeReducer,
})

export default rootReducer;