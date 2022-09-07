import { createSlice } from '@reduxjs/toolkit';
import { IMessages } from 'Interfaces/interfaces';

const initialState: IMessages = {
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
    },
  },
});

export const { setMessagesData } = messageSlice.actions;
export const selectData = (state: IMessages) => state.mchat;

export default messageSlice.reducer;
