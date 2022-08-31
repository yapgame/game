import React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import auth from '../../utils/authApi';

import { styleFormDialogBox } from './styles';
import { IUser } from '../../interfaces/IUser';

export default function FormDialog({ open, setOpen, result }: {
  open: boolean,
  setOpen: (o: boolean) => void,
  result: IUser[],
}) {
  const handleClose = () => {
    setOpen(false);
  };

  const addUserToChat = (userId: number) => {
    const usersData: Array<number> = [];
    usersData.push(userId);
    auth.addUser({ users: usersData, chatId: 1177 })
      .then((res: Response) => {
        console.log(res); // 1177
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={styleFormDialogBox}
          component="form"
        >
          <DialogTitle>Result</DialogTitle>
          <DialogActions>
            <Container sx={{ m: 1 }}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableBody>
                    {result.map((row) => (
                      <TableRow
                        key={row.login}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell
                          align="left"
                          onDoubleClick={() => addUserToChat(row.id)}
                        >
                          {row.login}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
