import { Urls } from 'Utils/constants';
import { IUMenu } from 'Interfaces/interfaces';

export const userPrivateMenu: Array<IUMenu> = [
  {
    loggedIn: true,
    name: 'Profile',
    url: Urls.PROFILE.INDEX,
  },
  {
    loggedIn: true,
    name: 'Edit',
    url: Urls.PROFILE.EDIT,
  },
];
