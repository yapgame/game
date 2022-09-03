/* eslint-disable class-methods-use-this */
import { IOption } from 'Interfaces/IOption';
import { Methods } from './Methods';
import { BaseApi } from './baseApi';
import { Urls } from './constants';

export class GameApi extends BaseApi {
  constructor(options: IOption) {
    super(options);
    this.options = options;
  }

  async addToLeaderboard({
    data,
    ratingFieldName,
    teamName,
  }: { data: Record<string, string|number>, ratingFieldName: string, teamName: string }) {
    const res = await fetch(`${this.options.baseUrl}/leaderboard`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({ data, ratingFieldName, teamName }),
    });
    return res;
  }

  async getLeaderboard({
    ratingFieldName,
    cursor,
    limit,
  }: { ratingFieldName: string, cursor: number, limit: number }) {
    const res = await fetch(`${this.options.baseUrl}/leaderboard/all`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({ ratingFieldName, cursor, limit }),
    });
    return this.checkResponse(res);
  }

  async getLeaderboardByTeam(team: string, {
    ratingFieldName,
    cursor,
    limit,
  }: { ratingFieldName: string, cursor: number, limit: number }) {
    const res = await fetch(`${this.options.baseUrl}/leaderboard/${team}`, {
      method: Methods.POST,
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({ ratingFieldName, cursor, limit }),
    });
    return this.checkResponse(res);
  }
}

const game = new GameApi({
  baseUrl: Urls.SHARE.API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default game;
