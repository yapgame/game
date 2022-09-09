/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import { Urls } from 'Utils/constants';
import { IFormDialogProps, IOUser } from 'Interfaces/interfaces';
import { selectData } from '../../slices/user/userSlice';

import { styleAvatar, styleFormDialogBox, styleFormDialogButton } from './styles';
import img from '../../images/2.jpg';

export default function FormDialog(props: IFormDialogProps) {
  const { onHandleSubmit } = props;
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File|null>(null);
  const [isValid, setIsValid] = useState(false);

  const user = useSelector(selectData) as unknown as IOUser;
  const { login, avatar } = user.user;

  React.useEffect(() => {
    if (file) {
      setIsValid(true);
    }
  }, [file]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    handleClose();
    onHandleSubmit(file!);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uploadFile = (evt: React.FormEvent<HTMLInputElement>) => {
    const input = evt.target as HTMLInputElement;
    setFile(input.files![0]);
  };

  return (
    <div>
      <Avatar
        onClick={handleClickOpen}
        sx={styleAvatar}
        alt={login}
        src={avatar ? `${Urls.SHARE.FILES}${avatar}` : `${img}`}
      />

      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={styleFormDialogBox}
          component="form"
          onSubmit={handleSubmit}
        >
          <DialogTitle>Avatar</DialogTitle>
          <DialogActions>
            <Button
              sx={styleFormDialogButton}
              variant="outlined"
              size="large"
              component="label"
              htmlFor="upload"
            >
              Сhoose
              <input id="upload" type="file" hidden onChange={uploadFile} />
            </Button>
            <Button
              sx={styleFormDialogButton}
              variant="outlined"
              size="large"
              onClick={handleSubmit}
              type="submit"
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
