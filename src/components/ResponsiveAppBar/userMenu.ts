import { Urls } from '../../utils/constants';

export const userMenu: Array<Record<string, string>> = [
  {
    name: 'Profile',
    url: Urls.PROFILE,
  },
  {
    name: 'Edit',
    url: Urls.PROFILE_EDIT,
  },
  {
    name: 'Logout',
    url: Urls.LOGOUT,
  },
  {
    name: 'SignUp',
    url: Urls.SIGNUP,
  },
  {
    name: 'SignIn',
    url: Urls.SIGNIN,
  },
];
