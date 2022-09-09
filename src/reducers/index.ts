import { combineReducers } from 'redux';
import userReducer from '../slices/user/userSlice';
import chatReduser from '../slices/chat/chatSlice';
import messageReduser from '../slices/chat/messageSlice';

export default combineReducers({
  user: userReducer,
  chat: chatReduser,
  mchat: messageReduser,
});
