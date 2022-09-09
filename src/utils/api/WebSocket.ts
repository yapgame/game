/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { Urls } from 'Utils/constants';
import { store } from '../../store/store';
import { setMessagesData } from '../../slices/chat/messageSlice';
import { IMessage } from './IMessage';

export default class WebSocketService {
  // eslint-disable-next-line no-use-before-define
  static _instance: WebSocketService;

  private _socket;

  constructor(userId?: number, chatId?: number, chatToken?: string) {
    if (userId && chatId && chatToken) {
      // eslint-disable-next-line no-underscore-dangle
      this._socket?.close();
      this._socket = new WebSocket(`${Urls.SHARE.SOCKET_URL}${userId}/${chatId}/${chatToken}`);
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

    this.send({
      content: '0',
      type: 'get old',
    });

    this.heartbeat();
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

    store.dispatch(setMessagesData(messages));
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

    if (event.code.toString() === '1006') {
      this.onOpen();
    }
  }

  private heartbeat() {
    if (!this._socket || this._socket.readyState !== 1) {
      return;
    }

    this._ping();
    setTimeout(() => {
      this.heartbeat();
    }, 10000);
  }

  private _ping(): void {
    this._socket?.send(JSON.stringify({
      type: 'ping',
    }));

    console.log('wss:// ping');
  }
}
