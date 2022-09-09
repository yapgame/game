import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ForumMessage from './ForumMessage';

const messages = [1, 2, 3];

function ForumCard() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="overline" display="block" gutterBottom>
          Title
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          Message
        </Typography>
      </Box>
      {messages.map((message) => <ForumMessage key={message} />)}
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
        <IconButton color="primary" aria-label="upload picture" component="label">
          <SendIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

export default ForumCard;
