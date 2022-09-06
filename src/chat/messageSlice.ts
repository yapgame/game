import { createSlice } from '@reduxjs/toolkit';

interface IMessage {
  chat_id: number,
  content: string,
  file: null,
  id: number,
  is_read: boolean,
  time: string,
  type: string,
  user_id: number,
}

export interface IMessages {
  mchat: {
    messages: Array<IMessage>
  }
}

export const initialState: IMessages = {
  mchat: {
    messages: [],
  },
};

const messageSlice = createSlice({
  name: 'mchat',
  initialState,
  reducers: {
    setMessagesData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.mchat = action.payload;
      console.log('+++', action.payload);
    },
  },
});

export const { setMessagesData } = messageSlice.actions;
export const selectData = (state: IMessages) => state.mchat;

export default messageSlice.reducer;
