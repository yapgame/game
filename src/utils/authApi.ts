/* eslint-disable class-methods-use-this */
import { Methods } from './Methods';
import { IOption } from './IOption';

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
    return this.checkResponse(res);
  }

  async signIn(data: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/auth/signin`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return this.checkResponse(res);
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

  async changeUserAvatar(data: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/user/profile/avatar`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return this.checkResponse(res);
  }

  async changeUserPassword(data: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/user/password`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return this.checkResponse(res);
  }

  async getUser() {
    const res = await fetch(`${this.options.baseUrl}/auth/user`, {
      method: 'GET',
      headers: this.options.headers,
      credentials: 'include',
    });
    console.log(res);
    return this.checkResponse(res);

    // const res = await fetch(`${this.options.baseUrl}/user/${id}`, {
    //   method: Methods.GET,
    //   // headers: this.options.headers,
    //   // body: JSON.stringify(data),
    // });
    // return this.checkResponse(res);
  }
}

const auth = new Auth({
  baseUrl: 'https://ya-praktikum.tech/api/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default auth;
