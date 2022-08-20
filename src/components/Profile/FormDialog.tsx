import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import { IValid } from './IValid';
import useFormWithValidation from '../../utils/validator';

export default function FormDialog({ alt, src }: Record<string, string>) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    console.log(values);
    // eslint-disable-next-line no-use-before-define
    handleClose();
    // handleSignIn(values);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Avatar
        onClick={handleClickOpen}
        sx={{
          height: 100,
          width: 100,
        }}
        alt={alt}
        src={src}
      />

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            width: '60ch',
          }}
          component="form"
        >
          <DialogTitle>Avatar</DialogTitle>
          <DialogContent>
            <TextField
              onChange={handleChange}
              error={!!errors.avatar}
              helperText={errors.avatar}
              sx={{
                width: '100%',
              }}
              autoComplete="off"
              autoFocus
              margin="dense"
              name="avatar"
              id="outlined-required"
              defaultValue=""
              label="Url link"
              type="url"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                m: 2,
                width: '100%',
              }}
              variant="outlined"
              size="large"
              onClick={handleSubmit}
              disabled={!isValid}
            >
              Update
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
