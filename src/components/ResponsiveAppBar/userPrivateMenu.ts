import { Urls } from '../../utils/constants';

import { IUMenu } from '../../interfaces/interfaces';

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
