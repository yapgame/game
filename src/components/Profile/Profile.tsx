import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { BASE_URL } from '../../utils/constants';

import { IProps } from './IProps';

function Profile(props: IProps) {
  const { userName, score } = props;
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
        <Typography variant="h5" gutterBottom component="div">
          {`Name: ${userName}`}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {`Score: ${score}`}
        </Typography>
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

export default Profile;
