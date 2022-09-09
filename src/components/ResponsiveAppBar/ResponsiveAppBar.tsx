import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { IResponsiveAppBar, IUMenu, IOUser } from 'Interfaces/interfaces';
import { Urls } from 'Utils/constants';
import { mainMenu } from './mainMenu';
import { userPrivateMenu } from './userPrivateMenu';
import { selectData } from '../../slices/user/userSlice';

import img from '../../images/2.jpg';

import {
  styleNavLink,
  styleNavLinkWhite,
  styleTypography,
  styleBox,
  styleTypographyH5,
} from './styles';

function ResponsiveAppBar({ loggedIn, handleSignOut }: IResponsiveAppBar) {
  const mountedRef = useRef(false);

  const data = useSelector(selectData) as unknown as IOUser;
  const { login, avatar } = data.user;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    mountedRef.current = true;
    setAnchorElUser(null);
    return () => {
      mountedRef.current = false;
    };
  }, [avatar]);

  useEffect(() => {
    mountedRef.current = true;
    setAnchorElUser(null);
    return () => {
      mountedRef.current = false;
    };
  }, [loggedIn]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={styleTypography}
          >
            CROCO
          </Typography>
          <Box sx={styleBox}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {mainMenu.map((page: Record<string, string>) => (
                <NavLink
                  key={page.name}
                  to={page.url}
                  style={styleNavLink}
                >
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={styleTypographyH5}
          >
            CROCO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {mainMenu.map((page: Record<string, string>) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink
                  key={page.name}
                  to={page.url}
                  style={styleNavLinkWhite}
                >
                  {page.name}
                </NavLink>
              </Button>
            ))}
          </Box>

          {loggedIn
            ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={login}
                      // src={avatar !== null && avatar !== undefined ? avatar : img}
                      src={avatar ? `${Urls.SHARE.FILES}${avatar}` : `${img}`}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {
                    userPrivateMenu.map((setting: IUMenu) => (
                      <NavLink
                        key={setting.name}
                        to={setting.url}
                        style={styleNavLink}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting.name}</Typography>
                        </MenuItem>
                      </NavLink>
                    ))
                  }
                  <MenuItem onClick={handleSignOut}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )
            : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
