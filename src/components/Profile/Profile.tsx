/* eslint-disable camelcase */
import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';
import FormDialog from './FormDialog';
import image from '../../images/2.jpg';
import { Urls } from '../../utils/constants';

import { IProps } from './IProps';

function Profile({
  login,
  score,
  first_name,
  second_name,
}: IProps) {
  const currentUser: Record<string, string> = { url: image, alt: 'name' };
  // const userInfo: any = { userName: 'Fox', score: 77, email: 'email@yandex.ru' };
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
          minHeight: 800,
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 400,
            minHeight: 600,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <Tooltip title="Change avatar">
            <Badge badgeContent={`${score}`} color="primary">
              <IconButton>
                <FormDialog
                  alt={currentUser.name}
                  src={currentUser.url}
                />
              </IconButton>
            </Badge>
          </Tooltip>
          <Typography
            sx={{
              marginTop: 5,
            }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {`Login: ${login}`}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {`Full name: ${first_name} ${second_name}`}
          </Typography>

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
        </Card>
      </Box>
    </Container>
  );
}

export default Profile;
