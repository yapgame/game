import React, { useEffect, useRef, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Message from 'Components/Chat/Message';
import { IUser, IMessage } from 'Interfaces/interfaces';
import { styleTableRow } from 'Components/Game/styles';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

function Messages({ mchat, getUser, word }:
  { mchat: IMessage, getUser: (id: number) => Promise<IUser>, word: string }) {
  const SLICE = -10;
  const mountedRef = useRef(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const getCurrentUser = (id: number) => {
    getUser(id).then((u: IUser) => setUsers([...users, u]));
  };

  const showWinMessage = () => {
    console.log('bingo');
  };

  useEffect(() => {
    mountedRef.current = true;

    if (!Array.isArray(mchat) && mchat?.id) {
      if (mchat?.content?.type === 'message') {
        if (!users.some((user: IUser) => user.id === mchat.user_id)) {
          getCurrentUser(mchat.user_id);
        }
        const { content }: { content: string} = mchat.content;

        if (content === word) {
          showWinMessage();
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
    <Container sx={{ m: 1, maxWidth: 280, height: '100%' }}>
      <TableContainer sx={{ m: 1, maxWidth: 280 }} component={Paper}>
        <Table sx={{ maxWidth: 280 }} size="small" aria-label="a dense table">
          <TableBody>
            {messages.slice(SLICE).map((message: IMessage) => (
              <TableRow key={message?.id} sx={styleTableRow}>
                <TableCell align="left">
                  <Message key={message?.id} users={users} message={message} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Messages;
