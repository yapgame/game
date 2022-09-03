import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IUser } from 'Interfaces/IUser';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import chats from 'Utils/chatApi';
import PlayerList from './PlayerList';
import Inbox from './Inbox';
import Message from './Message';
import SearchBox from './SearchBox';
import FormDialog from './FormDialog';
import { styleChatBox, styleChatPaper } from './styles';
import { selectData } from '../../chat/chatSlice';

function Chat() {
  const mountedRef = useRef(false);
  const chat = useSelector(selectData) as unknown as { chat: number };
  const [open, setOpen] = useState(false);
  const [result, setResult] = React.useState<[]|IUser[]>([]);
  const [users, setUsers] = useState<Array<IUser>>([]);

  const getChatUsers = () => {
    // let chatId = 0;

    console.log(chat?.chat);

    // if (chat?.chat) {
    //   chatId = chat.chat;
    // } else {
    //   const stringId = localStorage.getItem('game');
    //   chatId = Number(stringId);
    // }

    // chats.getChatUsers({ id: chatId })
    //   .then((res: Response) => {
    //     const list = res as unknown as IUser[];
    //     setUsers(list);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const addUserToChat = (user: IUser) => {
    const usersData: Array<number> = [user.id];
    chats.addUser({ users: usersData, chatId: chat.chat })
      .then((res: Response) => {
        console.log(res);
        const arr = [...users, user];
        setUsers(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeUserFromChat = (userId: number) => {
    const usersData: Array<number> = [userId];
    chats.deleteUser({ users: usersData, chatId: chat.chat })
      .then((res: Response) => {
        console.log(res);
        const arr = users.filter((u: IUser) => u.id !== userId);
        setUsers(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    mountedRef.current = true;
    if (chat.chat) {
      getChatUsers();
    }
    return () => {
      mountedRef.current = false;
    };
  }, [chat.chat, users.length]);

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
        <Inbox />
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
