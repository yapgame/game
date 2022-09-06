/* eslint-disable class-methods-use-this */
import { IOption } from 'Interfaces/IOption';
import { Methods } from './Methods';
import { BaseApi } from './baseApi';
import { Urls } from './constants';

export class AuthApi extends BaseApi {
  constructor(options: IOption) {
    super(options);
    this.options = options;
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

  async changeUserAvatar(file: File) {
    const data = new FormData();
    data.append('avatar', file);
    const res = await fetch(`${this.options.baseUrl}/user/profile/avatar`, {
      method: Methods.PUT,
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
      body: JSON.stringify(data),
    });

    return this.checkResponse(res);
  }

  async getUser() {
    const res = await fetch(`${this.options.baseUrl}/auth/user`, {
      method: Methods.GET,
      headers: this.options.headers,
      credentials: 'include',
    });

    return this.checkResponse(res);
  }

  async getUserById(id: number) {
    const res = await fetch(`${this.options.baseUrl}/user/${id}`, {
      method: Methods.GET,
      headers: this.options.headers,
      credentials: 'include',
    });

    return this.checkResponse(res);
  }

  async findUser({ login }: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/user/search`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({ login }),
    });

    return this.checkResponse(res);
  }
}

const auth = new AuthApi({
  baseUrl: Urls.SHARE.API,
  headers: {
    Accept: 'application/json',
    mode: 'cors',
    'Content-Type': 'application/json',
  },
});

export default auth;
