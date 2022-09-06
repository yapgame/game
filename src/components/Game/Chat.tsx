import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {
  IOUser,
  IChatProps,
  IConnectProps,
  IDraw,
} from 'Interfaces/interfaces';
import WebSocketService from 'Utils/WebSocket';
import chat from 'Utils/chatApi';
import { useSelector } from 'react-redux';
import { selectData } from '../../user/userSlice';
import { IMessages, selectData as selectMessageData } from '../../chat/messageSlice';
import PlayerList from './PlayerList';
import Inbox from './Inbox';
import Message from './Messages';
import SearchBox from './SearchBox';
import FormDialog from './FormDialog';
import { styleChatBox, styleChatPaper } from './styles';

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

  const getChatToken = async (id: number) => {
    const { token }: Record<string, string> = await chat.getChatToken({ id });
    return token;
  };

  const connectToChat = (props: IConnectProps) => {
    const { userId, chatId, chatToken } = props;
    conn = new WebSocketService(userId, chatId, chatToken);
  };

  const sendChatMessage = (message: Record<string, string>|IDraw|null|string) => {
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

  useEffect(() => {
    mountedRef.current = true;
    const stringId: string|null = localStorage.getItem('game');

    if (points) {
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
  }, [points?.currY]);

  return (
    <Box sx={styleChatBox}>
      <Paper elevation={1} sx={styleChatPaper}>
        <SearchBox setOpen={setOpen} setResult={setResult} />
        <PlayerList
          users={users}
          removeUserFromChat={removeUserFromChat}
        />
      </Paper>
      <Paper>
        <Message mchat={messages.mchat} />
        <Inbox sendChatMessage={sendChatMessage} />
      </Paper>
      <Paper elevation={3} />
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
