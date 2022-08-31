import React, { useRef, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import auth from '../../utils/authApi';
import { IUser } from '../../interfaces/IUser';

function PlayerList() {
  const [users, setUsers] = useState<IUser[]>([]);
  const mountedRef = useRef(false);

  const getChatUsers = () => {
    auth.getChatUsers({ id: 1177 })
      .then((res: Response) => {
        const list = res as unknown as IUser[];
        setUsers(list);
        console.log(res); // 1177
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    mountedRef.current = true;
    getChatUsers();
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <Container sx={{ m: 1, maxWidth: 250 }}>
      <TableContainer sx={{ m: 1, maxWidth: 250 }} component={Paper}>
        <Table sx={{ maxWidth: 250 }} size="small" aria-label="a dense table">
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.login}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  align="left"
                  onDoubleClick={() => console.log('pl', row.id)}
                >
                  {row.login}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default PlayerList;
