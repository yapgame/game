import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ForumMessage() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="overline" display="block" gutterBottom>
          Message
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          user + data
        </Typography>
      </Box>
    </Container>
  );
}

export default ForumMessage;
