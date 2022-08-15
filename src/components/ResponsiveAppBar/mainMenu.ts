import { LEADERBOARD_URL, PLAY_URL, TEAM_URL } from '../../utils/constants';

export const mainMenu: Array<Record<string, string>> = [
  {
    name: 'Play',
    url: PLAY_URL,
  },
  {
    name: 'Leaderboard',
    url: LEADERBOARD_URL,
  },
  {
    name: 'Team',
    url: TEAM_URL,
  },
];
