import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Urls } from 'Utils/constants';

import { styleBox, styleNavLink } from './styles';

function InternalServerError() {
  return (
    <Container maxWidth="lg">
      <Box gridColumn="span 1" sx={styleBox}>
        <Typography variant="h2" gutterBottom component="div">500</Typography>
        <Typography variant="body1" gutterBottom>Internal Server Error</Typography>
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

export default InternalServerError;
