import * as React from 'react';
import Paper from '@mui/material/Paper';

function Message() {
  return (
    <Paper sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 0,
        margin: 0,
        padding: 0,
      },
    }}
    >
      123
    </Paper>
  );
}

export default Message;
