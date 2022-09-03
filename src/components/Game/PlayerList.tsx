import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { IUser, IPlayerListProps } from 'interfaces/interfaces';

function PlayerList({ users, removeUserFromChat }: IPlayerListProps) {
  return (
    <Container sx={{ m: 1, maxWidth: 250 }}>
      <TableContainer sx={{ m: 1, maxWidth: 250 }} component={Paper}>
        <Table sx={{ maxWidth: 250 }} size="small" aria-label="a dense table">
          <TableBody>
            {users.map((row: IUser) => (
              <TableRow
                key={row.login}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  align="left"
                  onDoubleClick={() => removeUserFromChat(row.id)}
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
