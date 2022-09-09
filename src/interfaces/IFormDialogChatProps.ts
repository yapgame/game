import { IUser } from 'Interfaces/interfaces';

export interface IFormDialogChatProps {
  open: boolean,
  result: Array<IUser>,
  addUserToChat: (u: IUser) => void,
  setOpen: (o: boolean) => void,
  // setUsers: (u: IUser) => void
}
