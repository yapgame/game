import React from 'react';
import Paper from '@mui/material/Paper';
import { IUser, IMessage } from 'Interfaces/interfaces';
import { styleMessage } from '../Game/styles';

function Message({ users, message }: {users: IUser[], message: IMessage}) {
  return (
    <Paper key={message?.id} sx={styleMessage}>
      {`${users.filter((user: IUser) => user?.id === message?.user_id)[0]?.login}: ${message.content.content}`}
    </Paper>
  );
}

export default Message;
