import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { Urls } from 'Utils/constants';
import useFormWithValidation from 'Utils/validator';

import { IValid, ISignUpProps } from 'Interfaces/interfaces';

import {
  styleCard,
  styleBox,
  styleTextField,
  styleButton,
  styleNavLink,
} from './styles';

function SignUp({ handleSignUp }: ISignUpProps) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    handleSignUp(values);
  };

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        onSubmit={handleSubmit}
        gridColumn="span 1"
        sx={styleBox}
      >
        <Card sx={styleCard}>
          <Typography variant="h5" gutterBottom component="div">
            SignUp
          </Typography>
          <TextField
            error={!!errors.login}
            sx={styleTextField}
            required
            id="outlined-required"
            label="Login"
            defaultValue=""
            name="login"
            onChange={handleChange}
            helperText={errors.login}
            type="login"
          />
          <TextField
            error={!!errors.display_name}
            sx={styleTextField}
            required
            id="outlined-required"
            label="Display name"
            defaultValue=""
            name="display_name"
            onChange={handleChange}
            helperText={errors.display_name}
            type="display_name"
          />
          <TextField
            error={!!errors.first_name}
            sx={styleTextField}
            required
            id="outlined-required"
            label="First name"
            defaultValue=""
            name="first_name"
            onChange={handleChange}
            helperText={errors.first_name}
            type="first_name"
          />
          <TextField
            error={!!errors.second_name}
            sx={styleTextField}
            required
            id="outlined-required"
            label="Second name"
            defaultValue=""
            name="second_name"
            onChange={handleChange}
            helperText={errors.second_name}
            type="second_name"
          />
          <TextField
            error={!!errors.phone}
            sx={styleTextField}
            required
            id="outlined-required"
            label="Phone"
            defaultValue=""
            name="phone"
            onChange={handleChange}
            helperText={errors.phone}
            type="phone"
          />
          <TextField
            error={!!errors.email}
            sx={styleTextField}
            required
            id="outlined-required"
            label="E-mail"
            defaultValue=""
            name="email"
            onChange={handleChange}
            helperText={errors.email}
            type="email"
          />
          <TextField
            error={!!errors.password}
            sx={styleTextField}
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            name="password"
            onChange={handleChange}
            helperText={errors.password}
            type="password"
            autoComplete="current-password"
            inputProps={{
              minLength: 6,
            }}
          />
          <Button
            variant="outlined"
            size="large"
            sx={styleButton}
            type="submit"
            disabled={!isValid}
          >
            SignUp
          </Button>
          <NavLink
            to={Urls.SIGN.IN}
            style={styleNavLink}
          >
            SignIn
          </NavLink>
        </Card>
      </Box>
    </Container>
  );
}

export default SignUp;
