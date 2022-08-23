/* eslint-disable class-methods-use-this */
<<<<<<< Updated upstream
interface IOption {
  baseUrl: string,
  headers: Record<string, string>,
}

const Methods = {
  POST: 'POST',
};
=======
import { Methods } from './Methods';
import { IOption } from '../interfaces/IOption';
>>>>>>> Stashed changes

export class Auth {
  private options: IOption;

  constructor(options: IOption) {
    this.options = options;
  }

  checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка ${res.status}`);
  }

  async signUp(data: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/auth/signup`, {
      method: Methods.POST,
      headers: this.options.headers,
      body: JSON.stringify(data),
    });
    return res;
  }

  async signIn(data: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/auth/signin`, {
      method: Methods.POST,
      headers: this.options.headers,
<<<<<<< Updated upstream
=======
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return res;
  }

  async signOut() {
    const res = await fetch(`${this.options.baseUrl}/auth/logout`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
      // body: JSON.stringify(data),
    });
    return res;
  }

  async changeUserInfo(data: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/user/profile`, {
      method: Methods.PUT,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return this.checkResponse(res);
  }

  async changeUserAvatar(file: any) {
    const data = new FormData();
    data.append('avatar', file, '2.jpg');
    const res = await fetch(`${this.options.baseUrl}/user/profile/avatar`, {
      method: Methods.PUT,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      credentials: 'include',
      body: data,
    });
    return this.checkResponse(res);
  }

  async changeUserPassword(data: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/user/password`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
>>>>>>> Stashed changes
      body: JSON.stringify(data),
    });
    return this.checkResponse(res);
  }
<<<<<<< Updated upstream
=======

  async getUser() {
    const res = await fetch(`${this.options.baseUrl}/auth/user`, {
      method: Methods.GET,
      headers: this.options.headers,
      credentials: 'include',
    });
    return this.checkResponse(res);
  }
>>>>>>> Stashed changes
}

const auth = new Auth({
  baseUrl: 'https://ya-praktikum.tech/api/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default auth;
