/* eslint-disable class-methods-use-this */
import { IOption } from 'Interfaces/IOption';
import { Methods } from './Methods';
import { BaseApi } from './baseApi';
import { Urls } from '../constants';

export class ChatApi extends BaseApi {
  constructor(options: IOption) {
    super(options);
    this.options = options;
  }

  async createChat({ title }: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/chats`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({ title }),
    });
    return this.checkResponse(res);
  }

  async getChatUsers({ id }: Record<string, number>) {
    const res = await fetch(`${this.options.baseUrl}/chats/${id}/users`, {
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

  async getChatToken({ id }: Record<string, number>) {
    const res = await fetch(`${this.options.baseUrl}/chats/token/${id}`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
    });
    return this.checkResponse(res);
  }

  async addUser({ users, chatId }: { users: Array<number>, chatId: number }) {
    const res = await fetch(`${this.options.baseUrl}/chats/users`, {
      method: Methods.PUT,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({ users, chatId }),
    });
    return res;
  }

  async deleteUser({ users, chatId }: { users: Array<number>, chatId: number }) {
    const res = await fetch(`${this.options.baseUrl}/chats/users`, {
      method: Methods.DELETE,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({ users, chatId }),
    });
    return res;
  }
}

const chat = new ChatApi({
  baseUrl: Urls.SHARE.API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default chat;
