import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

function InternalServerError() {
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
        <Typography variant="h2" gutterBottom component="div">500</Typography>
        <Typography variant="body1" gutterBottom>Internal Server Error</Typography>
        <Link href="/" underline="none">Back</Link>
      </Box>
    </Container>
  );
}

export default InternalServerError;
