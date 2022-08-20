import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Urls } from '../../utils/constants';

function NotFound() {
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
        <Typography variant="h2" gutterBottom component="div">404</Typography>
        <Typography variant="body1" gutterBottom>Page Not Found</Typography>
        <NavLink
          to={Urls.BASE}
          style={{
            margin: '0',
            color: '#1976d2',
            textDecoration: 'none',
          }}
        >
          Back
        </NavLink>
      </Box>
    </Container>
  );
}

export default NotFound;
