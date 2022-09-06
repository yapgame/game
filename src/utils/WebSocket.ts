/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import { store } from '../store/store';
import { setMessagesData } from '../chat/messageSlice';

const Urls = {
  BASE: {
    INDEX: 'https://ya-praktikum.tech/api/v2',
    SOCKET_URL: 'wss://ya-praktikum.tech/ws/chats/',
  },
};

interface IMessage {
  content: string | number,
  type: string,
}

export default class WebSocketService {
  // eslint-disable-next-line no-use-before-define
  static _instance: WebSocketService;

  private _socket;

  constructor(userId?: number, chatId?: number, chatToken?: string) {
    if (userId && chatId && chatToken) {
      // eslint-disable-next-line no-underscore-dangle
      this._socket?.close();
      this._socket = new WebSocket(`${Urls.BASE.SOCKET_URL}${userId}/${chatId}/${chatToken}`);
      this._socket.addEventListener('open', this.onOpen.bind(this));
      // @ts-ignore
      this._socket.addEventListener('message', this.onMessage.bind(this));
      // @ts-ignore
      this._socket.addEventListener('error', this.onError.bind(this));
      // @ts-ignore
      this._socket.addEventListener('close', this.onClose.bind(this));
    }

    if (WebSocketService._instance) {
      // eslint-disable-next-line no-constructor-return
      return WebSocketService._instance;
    }

    WebSocketService._instance = this;
  }

  public send(payload: IMessage): void {
    console.log('Message sent');
    this._socket?.send(JSON.stringify(payload));
  }

  private onOpen(): void {
    console.log('Connection established');

    console.log();
    this.send({
      content: '0',
      type: 'get old',
    });
  }

  onMessage(event: Record<string, string>): void {
    let messages: Record<string, any> = JSON.parse(event.data);

    if (messages.type === 'user connected') {
      return;
    }

    if (Array.isArray(messages)) {
      messages = messages.map((item: Record<string, unknown>) => item);
      messages.reverse();
    }

    console.log('=>', messages);
    store.dispatch(setMessagesData(messages));
    // store.dispatchAction(ActionTypes.GET_CHAT_MESSAGES, messages);
  }

  onError(event: Record<string, object>): void {
    console.log('Error: ', event.message);
  }

  onClose(event: Record<string, object>): void {
    if (event.wasClean) {
      console.log('Connection closed');
    } else {
      console.log('Connection interrupted');
    }

    console.log(`Event code: ${event.code}`);
    console.log(`Event reason: ${event.reason}`);
  }
}
