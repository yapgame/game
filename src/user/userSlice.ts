import { createSlice } from '@reduxjs/toolkit';

import { IOUser } from '../interfaces/interfaces';

const initialState: IOUser = {
  user: {
    id: 0,
    first_name: 'string',
    second_name: 'string',
    display_name: 'string',
    login: 'string',
    email: 'email@yandex.ru',
    phone: '0',
    avatar: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export const selectData = (state: IOUser) => state.user;

export default userSlice.reducer;
