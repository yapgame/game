import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { styleBox } from './styles';

function PageStart() {
  const handleStartGame = () => {
    console.log('start');
  };

  return (
    <Container maxWidth="lg">
      <Box gridColumn="span 1" sx={styleBox}>
        <Typography variant="h2" gutterBottom component="div">
          New Game
        </Typography>
        <Button
          variant="outlined"
          onClick={handleStartGame}
        >
          Start
        </Button>
      </Box>
    </Container>
  );
}

export default PageStart;
