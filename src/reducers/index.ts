import { combineReducers } from 'redux';
import userReducer from '../user/userSlice';
import chatReduser from '../chat/chatSlice';

export default combineReducers({
  user: userReducer,
  chat: chatReduser,
});
