import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { IProps } from './IProps';

function PageStart(props: IProps) {
  const { handleStartGame } = props;
  return (
    <Container maxWidth="lg">
      <Box
        gridColumn="span 1"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          minHeight: 600,
        }}
      >
        <Typography variant="h2" gutterBottom component="div">New Game</Typography>
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
