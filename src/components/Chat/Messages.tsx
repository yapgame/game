import React, { useEffect, useRef, useState } from 'react';
import Message from 'Components/Chat/Message';
import { IUser, IMessage } from 'Interfaces/interfaces';

function Messages({ mchat, getUser }: any) {
  const SLICE = -10;
  const mountedRef = useRef(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const getCurrentUser = (id: number) => {
    getUser(id).then((u: IUser) => setUsers([...users, u]));
  };

  useEffect(() => {
    mountedRef.current = true;

    if (!Array.isArray(mchat) && mchat?.id) {
      if (mchat?.content?.type === 'message') {
        if (!users.some((user: IUser) => user.id === mchat.user_id)) {
          getCurrentUser(mchat.user_id);
        }

        const data = [...messages, mchat];
        setMessages(data);
      }
    }

    return () => {
      mountedRef.current = false;
    };
  }, [mchat?.id]);

  return (
    <>
      {messages.slice(SLICE).map((message: IMessage) => (
        <Message key={message?.id} users={users} message={message} />
      ))}
    </>
  );
}

export default Messages;
