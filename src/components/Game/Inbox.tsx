import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

function Inbox({ sendChatMessage }: { sendChatMessage: (s: string) => void }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        size="small"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <IconButton
        onClick={() => sendChatMessage('test')}
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
}

export default Inbox;
