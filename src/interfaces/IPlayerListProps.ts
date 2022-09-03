import { IUser } from 'Interfaces/interfaces';

export interface IPlayerListProps {
  users: Array<IUser>,
  removeUserFromChat: (id: number) => void
}
