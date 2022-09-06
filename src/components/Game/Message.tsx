/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { IMessages, selectData as selectMessagesData } from '../../chat/messageSlice';

function Message() {
  // const mountedRef = useRef(false);
  const messages = useSelector(selectMessagesData) as unknown as IMessages;
  const arr: any = messages?.mchat ? messages.mchat : [];

  console.log('->', arr);

  return (
    <Paper sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 0,
        margin: 0,
        padding: 0,
      },
    }}
    >
      11
      { Array.from(arr).map((item: any, i: number) => <p key={`k-${item.time}`}>{`${item.time}`}</p>)}
    </Paper>
  );
}

export default Message;
