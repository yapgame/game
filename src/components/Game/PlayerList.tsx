import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { IUser, IPlayerListProps } from 'Interfaces/interfaces';
import { styleTableRow } from 'Components/Game/styles';

function PlayerList({ users, removeUserFromChat }: IPlayerListProps) {
  return (
    <Container sx={{ m: 1, maxWidth: 280, height: 300 }}>
      <TableContainer sx={{ m: 1, maxWidth: 280 }} component={Paper}>
        <Table sx={{ maxWidth: 280 }} size="small" aria-label="a dense table">
          <TableBody>
            {users.map((row: IUser) => (
              <TableRow key={row.login} sx={styleTableRow}>
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
