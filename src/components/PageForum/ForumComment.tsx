import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ForumComment() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="overline" display="block" gutterBottom>
          Comment
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          user + data
        </Typography>
      </Box>
    </Container>
  );
}

export default ForumComment;
