import { createSlice } from '@reduxjs/toolkit';

interface IChat {
  chat: Record<string, number>
}

const initialState: IChat = {
  chat: {
    chatId: 0,
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.chat = action.payload;
      // console.log(action.payload);
    },
  },
});

export const { setChatData } = chatSlice.actions;
export const selectData = (state: IChat) => state.chat;

export default chatSlice.reducer;
