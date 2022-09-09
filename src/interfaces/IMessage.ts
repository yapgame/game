export interface IMessage {
  chat_id: number,
  content: {type: string, content: string},
  file: null,
  id: number,
  is_read: boolean,
  time: string,
  type: string,
  user_id: number,
}
