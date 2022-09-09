import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Urls } from 'Utils/constants';
import { styleBox, styleNavLink } from './styles';

function Team() {
  return (
    <Container maxWidth="lg">
      <Box gridColumn="span 1" sx={styleBox}>
        <Typography variant="h2" gutterBottom component="div">Sydney team</Typography>
        <Typography variant="body1" gutterBottom>GitHub - game link</Typography>
        <Typography variant="body1" gutterBottom># 1 bmazur</Typography>
        <Typography variant="body1" gutterBottom> ... </Typography>
        <Typography variant="body1" gutterBottom>by Yandex Practicum</Typography>
        <NavLink
          to={Urls.MAIN.INDEX}
          style={styleNavLink}
        >
          Back
        </NavLink>
      </Box>
    </Container>
  );
}

export default Team;
