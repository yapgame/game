import { combineReducers } from 'redux';
import userReducer from '../user/userSlice';
import chatReduser from '../chat/chatSlice';
import messageReduser from '../chat/messageSlice';

export default combineReducers({
  user: userReducer,
  chat: chatReduser,
  mchat: messageReduser,
});
