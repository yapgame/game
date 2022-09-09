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
import { IFormDialogChatProps, IUser } from 'Interfaces/interfaces';
import { styleFormDialogBox } from './styles';

export default function FormDialog({
  open,
  result,
  addUserToChat,
  setOpen,
}: IFormDialogChatProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={styleFormDialogBox} component="form">
          <DialogTitle>Result</DialogTitle>
          <DialogActions>
            <Container sx={{ m: 1 }}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableBody>
                    {result.map((row: IUser) => (
                      <TableRow
                        key={row.login}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell
                          align="left"
                          onDoubleClick={() => addUserToChat(row)}
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
