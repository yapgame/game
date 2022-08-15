import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import { BASE_URL } from '../../utils/constants';

function Team() {
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
        <Typography variant="h2" gutterBottom component="div">Sydney team</Typography>
        <Typography variant="body1" gutterBottom>GitHub - game link</Typography>
        <Typography variant="body1" gutterBottom># 1 ...</Typography>
        <Typography variant="body1" gutterBottom># 2 ...</Typography>
        <Typography variant="body1" gutterBottom># 3 ...</Typography>
        <Typography variant="body1" gutterBottom>by Yandex Practicum</Typography>
        <NavLink
          to={BASE_URL}
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

export default Team;
