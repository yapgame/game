import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {
  IOUser,
  IConnectProps,
  IUser,
  IMessages,
  IMessage,
  IChatProps, IDraw,
} from 'Interfaces/interfaces';
import WebSocketService from 'Utils/api/WebSocket';
import chat from 'Utils/api/chatApi';
import authApi from 'Utils/api/authApi';
import { cards } from 'Utils/arrayCards';
import { selectData } from '../../slices/user/userSlice';
import { selectData as selectMessageData } from '../../slices/chat/messageSlice';
import PlayerList from '../Game/PlayerList';
import Inbox from './Inbox';
import Messages from './Messages';
import SearchBox from './SearchBox';
import FormDialog from '../Game/FormDialog';
import { styleChatBox, styleChatPaper, styleButton } from '../Game/styles';

let conn: WebSocketService;

function Chat({
  open,
  result,
  users,
  points,
  setOpen,
  setResult,
  addUserToChat,
  removeUserFromChat,
}: IChatProps) {
  const mountedRef = useRef(false);
  const user = useSelector(selectData) as unknown as IOUser;
  const messages = useSelector(selectMessageData) as unknown as IMessages;
  const [stringId, setStringId] = useState<string|null>(null);
  const [word, setWord] = useState<string>('Get Word');

  const getChatToken = async (id: number) => {
    const { token }: Record<string, string> = await chat.getChatToken({ id });
    return token;
  };

  const getUser = async (id: number) => {
    const currenttUser: IUser = await authApi.getUserById(id);
    return currenttUser;
  };

  const connectToChat = (props: IConnectProps) => {
    const { userId, chatId, chatToken } = props;
    conn = new WebSocketService(userId, chatId, chatToken);
  };

  // eslint-disable-next-line max-len
  const sendChatMessage = (message: string|Array<{ content: IDraw }>|Record<string, string>|null) => {
    if (message === null) {
      return;
    }

    if (conn) {
      conn.send({
        content: message,
        type: 'message',
      });
    }
  };

  const getRandomWord = () => {
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
  };

  const getWord = () => {
    const rnd: string = getRandomWord();
    setWord(rnd);
  };

  useEffect(() => {
    mountedRef.current = true;
    setStringId(localStorage.getItem('game'));

    if (points !== null) {
      sendChatMessage(points);
    }

    if (stringId) {
      getChatToken(Number(stringId)).then((chatToken) => {
        const data = { chatToken, userId: Number(user.user.id), chatId: Number(stringId) };
        connectToChat(data);
      });
    }

    return () => {
      mountedRef.current = false;
    };
  }, [points?.length, stringId]);

  return (
    <Box sx={styleChatBox}>
      <Paper elevation={1} sx={styleChatPaper}>
        <SearchBox setOpen={setOpen} setResult={setResult} stringId={stringId} />
        <PlayerList users={users} removeUserFromChat={removeUserFromChat} />
      </Paper>
      <Paper elevation={1} sx={styleChatPaper}>
        <Inbox sendChatMessage={sendChatMessage} />
        <Button
          onClick={getWord}
          variant="outlined"
          size="small"
          sx={styleButton}
          type="submit"
        >
          {word}
        </Button>
        <Messages getUser={getUser} mchat={messages.mchat as unknown as IMessage} word={word} />
      </Paper>
      <FormDialog
        open={open}
        result={result}
        addUserToChat={addUserToChat}
        setOpen={setOpen}
      />
    </Box>
  );
}

export default Chat;
