import { IMessage } from 'Interfaces/interfaces';

export interface IMessages {
  mchat: {
    messages: Array<IMessage>|IMessage,
  }
}
