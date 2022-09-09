import { IUser, IDraw } from './interfaces';

export interface IChatProps {
  open: boolean,
  result: []|IUser[],
  setOpen: (o: boolean) => void,
  setResult: (r: []|IUser[]) => void,
  addUserToChat: (user: IUser) => void,
  removeUserFromChat: (userId: number) => void,
  users: Array<IUser>,
  points: string|Array<{ content: IDraw }>|Record<string, string>|null,
}
