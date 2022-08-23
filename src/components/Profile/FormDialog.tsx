/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';

interface IProps {
  alt: string,
  src: string,
  onHandleSubmit: (data: any) => void,
}

export default function FormDialog(props: IProps) {
  const { alt, src, onHandleSubmit } = props;
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState([]);
  const [isValid, setIsValid] = useState(false);

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
    onHandleSubmit(file);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const uploadFile = (evt: any) => {
    setFile(evt.target.files[0]);
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
          onSubmit={handleSubmit}
        >
          <DialogTitle>Avatar</DialogTitle>

          <DialogActions>
            <Button
              sx={{
                m: 2,
                width: '100%',
              }}
              variant="outlined"
              size="large"
              component="label"
            >
              Сhoose
              <input
                type="file"
                hidden
                onChange={uploadFile}
              />
            </Button>

            <Button
              sx={{
                m: 2,
                width: '100%',
              }}
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
