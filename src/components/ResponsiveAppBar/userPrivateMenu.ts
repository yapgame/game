import { Urls } from '../../utils/constants';

interface IUMenu {
  loggedIn: boolean,
  name: string,
  url: string,
}

export const userPrivateMenu: Array<IUMenu> = [
  {
    loggedIn: true,
    name: 'Profile',
    url: Urls.PROFILE,
  },
  {
    loggedIn: true,
    name: 'Edit',
    url: Urls.PROFILE_EDIT,
  },
];
