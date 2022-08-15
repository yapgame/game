import {
  SIGNUP_URL,
  SIGNIN_URL,
  PROFILE_URL,
  LOGOUT_URL,
} from '../../utils/constants';

export const userMenu: Array<Record<string, string>> = [
  {
    name: 'Profile',
    url: PROFILE_URL,
  },
  {
    name: 'Logout',
    url: LOGOUT_URL,
  },
  {
    name: 'SignUp',
    url: SIGNUP_URL,
  },
  {
    name: 'SignIn',
    url: SIGNIN_URL,
  },
];
