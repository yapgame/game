import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { IOUser, IUser } from 'Interfaces/interfaces';
import WebSocketService from 'Utils/WebSocket';
import chat from 'Utils/chatApi';
import { useSelector } from 'react-redux';
import { selectData } from '../../user/userSlice';

import PlayerList from './PlayerList';
import Inbox from './Inbox';
import Message from './Message';
import SearchBox from './SearchBox';
import FormDialog from './FormDialog';
import { styleChatBox, styleChatPaper } from './styles';

interface IChatProps {
  open: boolean,
  result: []|IUser[],
  setOpen: (o: boolean) => void,
  setResult: (r: []|IUser[]) => void,
  addUserToChat: (user: IUser) => void,
  removeUserFromChat: (userId: number) => void,
  users: Array<IUser>,
}

function Chat({
  open,
  result,
  setOpen,
  setResult,
  addUserToChat,
  removeUserFromChat,
  users,
}: IChatProps) {
  // const connectToChat = (props: { userId: number, chatId: number, chatToken: string }) => {
  //   const { userId, chatId, chatToken } = props;
  //   // eslint-disable-next-line no-new
  //   (new WebSocketService(userId, chatId, chatToken));
  // };
  //
  const getChatToken = async (chatId: number) => {
    // eslint-disable-next-line no-shadow
    const result: Record<string, string> = await chat.getChatToken({ id: chatId });
    const { token } = await result;
    return token;
  };
  const user = useSelector(selectData) as unknown as IOUser;
  const stringId = localStorage.getItem('game');
  if (stringId) {
    getChatToken(Number(stringId)).then((r) => {
      console.log(r);
      // eslint-disable-next-line no-use-before-define
      connectToChat({ chatToken: r, userId: Number(user.user.id), chatId: Number(stringId) });
    });
  }
  const sendChatMessage = (message: string) => {
    if (message === '') {
      return;
    }
    (new WebSocketService()).send({
      content: message,
      type: 'message',
    });
    // (new WebSocketService()).send({
    //   content: message,
    //   type: 'open',
    // });
  };
  // sendChatMessage('test');
  const connectToChat = (props: { userId: number, chatId: number, chatToken: string }) => {
    const { userId, chatId, chatToken } = props;
    // eslint-disable-next-line no-new
    (new WebSocketService(userId, chatId, chatToken));
  };
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
        <Message />
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
