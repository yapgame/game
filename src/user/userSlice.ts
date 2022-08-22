import { createSlice } from '@reduxjs/toolkit';

import { IUser } from './IUser';

// eslint-disable-next-line @typescript-eslint/ban-types
const initialState: { user: IUser } = {
  user: {
    id: 0,
    first_name: 'string',
    second_name: 'string',
    display_name: 'string',
    login: 'string',
    email: 'email@yandex.ru',
    phone: '0',
    avatar: '1',
  },
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export const selectData = (state: { currentUser: IUser; }) => state.currentUser;

export default userSlice.reducer;
