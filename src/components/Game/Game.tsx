import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IUser } from 'Interfaces/IUser';
import chats from 'Utils/api/chatApi';
import { Urls } from 'Utils/constants';
import { IDraw } from 'Interfaces/interfaces';
import PaintBoard from './PaintBoard';
import Chat from '../Chat/Chat';
import { selectData } from '../../slices/chat/chatSlice';

function Game() {
  const navigate = useNavigate();
  const mountedRef = useRef(false);
  const chat = useSelector(selectData) as unknown as { chat: {chatId: number} };
  const [open, setOpen] = useState(false);
  const [result, setResult] = React.useState<[]|IUser[]>([]);
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [points, setPoints] = React.useState<Array<{ content: IDraw }>|null>(null);

  const getChatUsers = () => {
    let chatId = 0;

    if (chat?.chat.chatId > 0) {
      chatId = chat.chat.chatId as number;
    } else {
      const stringId = localStorage.getItem('game');

      if (stringId) {
        chatId = Number(stringId);
      } else {
        navigate(Urls.MAIN.PLAY);
      }
    }

    chats
      .getChatUsers({ id: chatId })
      .then((res: Response) => {
        const list = res as unknown as IUser[];
        setUsers(list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUserToChat = (user: IUser) => {
    const usersData: Array<number> = [user.id];
    const chatId = chat.chat.chatId !== 0
      ? chat.chat.chatId
      : Number(localStorage.getItem('game'));

    chats
      .addUser({ users: usersData, chatId })
      .then((res: Response) => {
        setUsers([...users, user]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeUserFromChat = (userId: number) => {
    const usersData: Array<number> = [userId];

    chats
      .deleteUser({ users: usersData, chatId: chat.chat.chatId })
      .then((res: Response) => {
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
    <>
      <PaintBoard setPoints={setPoints} />
      <Chat
        open={open}
        result={result}
        setOpen={setOpen}
        setResult={setResult}
        addUserToChat={addUserToChat}
        removeUserFromChat={removeUserFromChat}
        users={users}
        points={points}
      />
    </>
  );
}

export default Game;
