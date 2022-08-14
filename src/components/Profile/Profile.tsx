import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Profile() {
  // => Props
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
        <Typography variant="h5" gutterBottom component="div">UserName</Typography>
        <Typography variant="h6" gutterBottom component="div">Score - 77</Typography>
        <Link href="/back" underline="none">Back</Link>

      </Box>
    </Container>
  );
}

export default Profile;
