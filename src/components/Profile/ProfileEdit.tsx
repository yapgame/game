import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useFormWithValidation from 'Utils/validator';
import { Urls } from 'Utils/constants';
import { IValid } from 'Interfaces/interfaces';
import useEditProfile from './useEditProfile';

import { styleBox, styleNavLink, styleTextField } from './styles';

function ProfileEdit() {
  const [user, setUser] = useEditProfile();
  const {
    first_name,
    second_name,
    display_name,
    login,
    email,
    phone,
  } = user;

  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setUser(values);
  };

  useEffect(() => {
    values.login = login;
    values.email = email;
    values.first_name = first_name;
    values.second_name = second_name;
    values.display_name = display_name;
    values.phone = phone;
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        onSubmit={handleSubmit}
        gridColumn="span 1"
        sx={styleBox}
      >
        <Typography variant="h5" gutterBottom component="div">
          Edit profile
        </Typography>
        <TextField
          error={!!errors.login}
          sx={styleTextField}
          required
          id="outlined-required"
          label="Login"
          name="login"
          onChange={handleChange}
          defaultValue={login}
          helperText={errors.login}
          type="login"
        />
        <TextField
          error={!!errors.display_name}
          sx={styleTextField}
          required
          id="outlined-required"
          label="Display name"
          name="display_name"
          onChange={handleChange}
          defaultValue={display_name}
          helperText={errors.display_name}
          type="display_name"
        />
        <TextField
          error={!!errors.first_name}
          sx={styleTextField}
          required
          id="outlined-required"
          label="First name"
          name="first_name"
          onChange={handleChange}
          defaultValue={first_name}
          helperText={errors.first_name}
          type="first_name"
        />
        <TextField
          error={!!errors.second_name}
          sx={styleTextField}
          required
          id="outlined-required"
          label="Second name"
          name="second_name"
          onChange={handleChange}
          defaultValue={second_name}
          helperText={errors.second_name}
          type="second_name"
        />
        <TextField
          error={!!errors.email}
          sx={styleTextField}
          required
          id="outlined-required"
          label="E-mail"
          name="email"
          onChange={handleChange}
          defaultValue={email}
          helperText={errors.email}
          type="email"
        />
        <TextField
          error={!!errors.phone}
          sx={styleTextField}
          required
          id="outlined-required"
          label="Phone"
          name="phone"
          onChange={handleChange}
          defaultValue={phone}
          helperText={errors.phone}
          type="phone"
        />
        <Button
          variant="outlined"
          size="large"
          sx={styleTextField}
          type="submit"
          disabled={!isValid}
        >
          Save
        </Button>
        <NavLink to={Urls.MAIN.INDEX} style={styleNavLink}>
          Back
        </NavLink>
      </Box>
    </Container>
  );
}

export default ProfileEdit;
