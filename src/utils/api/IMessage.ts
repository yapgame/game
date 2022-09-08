import { IDraw } from 'Interfaces/interfaces';

export interface IMessage {
  content: string|Array<{ content: IDraw }>|Record<string, string>|null,
  type: string,
}
