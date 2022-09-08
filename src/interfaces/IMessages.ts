import { IDraw } from 'Interfaces/interfaces';

export interface IMessages {
  mchat: {
    messages: string|Array<{ content: IDraw }>|Record<string, string>|null,
  }
}
