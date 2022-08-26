/* eslint-disable class-methods-use-this */
import { Methods } from './Methods';
import { IOption } from '../interfaces/IOption';

export class Auth {
  private options: IOption;

  constructor(options: IOption) {
    this.options = options;
  }

  checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
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
}

const auth = new Auth({
  baseUrl: 'https://ya-praktikum.tech/api/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default auth;
