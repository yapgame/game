import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Start() {
  return (
    <Container maxWidth="lg">
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Start
      </Typography>
      <Button variant="outlined">Start</Button>
    </Container>
  );
}

export default Start;
