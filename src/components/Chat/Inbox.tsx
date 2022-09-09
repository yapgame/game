import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { IDraw } from 'interfaces/IDraw';

function Inbox({ sendChatMessage }:
  { sendChatMessage: (message: Array<{ content: IDraw }>|Record<string, string>|null) => void }) {
  const [values, setValues] = React.useState({ message: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;

    setValues({ ...values, [name]: value });
  };

  const handleSendMessage = (evt: React.FormEvent) => {
    evt.preventDefault();

    const { message }: Record<string, string> = values;

    if (message !== '') {
      sendChatMessage({ type: 'message', content: message });
      setValues({ ...values, message: '' });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSendMessage}
      sx={{ '& > :not(style)': { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={handleChange}
        name="message"
        size="small"
        id="outlined-basic"
        label="Your text..."
        variant="outlined"
        value={values.message || ''}
      />
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="button"
        type="submit"
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
}

export default Inbox;
