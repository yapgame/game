import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';
import { Urls } from 'Utils/constants';
import { IOUser } from 'Interfaces/interfaces';
import FormDialog from './FormDialog';
import { selectData } from '../../user/userSlice';
import { useAvatar } from './useAvatar';

import { styleBox, styleCard, styleNavLink } from './styles';

function Profile() {
  const score = 77;
  const user = useSelector(selectData) as unknown as IOUser;

  const {
    first_name,
    second_name,
    login,
    avatar,
  } = user.user;

  const [newAvatar, setAvatar] = useAvatar(avatar);

  const handleEditAvatar = (data: File) => {
    console.log(newAvatar);
    setAvatar(data);
  };

  return (
    <Container maxWidth="lg">
      <Box gridColumn="span 1" sx={styleBox}>
        <Card sx={styleCard}>
          <Tooltip title="Change avatar" placement="top">
            <Badge badgeContent={`${score}`} color="primary">
              <IconButton>
                <FormDialog
                  onHandleSubmit={handleEditAvatar}
                  alt={login}
                  src={avatar!}
                />
              </IconButton>
            </Badge>
          </Tooltip>
          <Typography
            sx={{ marginTop: 5 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {`Login: ${login}`}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {`Full name: ${first_name} ${second_name}`}
          </Typography>
          <NavLink to={Urls.MAIN.INDEX} style={styleNavLink}>
            Back
          </NavLink>
        </Card>
      </Box>
    </Container>
  );
}

export default Profile;
