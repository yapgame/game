import React from 'react';
import { IUser, IMessage } from 'Interfaces/interfaces';

function Message({ users, message }: {users: IUser[], message: IMessage}) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {`${users.filter((user: IUser) => user?.id === message?.user_id)[0]?.login}: ${message.content.content}`}
    </>
  );
}

export default Message;
