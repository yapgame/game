import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Footer() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="overline" display="block" gutterBottom>
          Sydney team
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
