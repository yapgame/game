import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Logo() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom component="div">Croco</Typography>
      </Box>
    </Container>
  );
}

export default Logo;
