import React, { useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import { IMessage } from '../../chat/messageSlice';
import { styleMessage } from './styles';

function Message({ mchat }: any) {
  const mountedRef = useRef(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    mountedRef.current = true;

    if (!Array.isArray(mchat) && mchat?.id) {
      if (mchat?.content?.type === 'message') {
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
      {messages.map((x: IMessage) => (
        <Paper key={x?.id} sx={styleMessage}>
          {`${x.user_id} > ${x.content.content}`}
        </Paper>
      ))}
    </>
  );
}

export default Message;
