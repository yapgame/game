import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { Urls } from '../../utils/constants';
import useFormWithValidation from '../../utils/validator';

import { IValid, ISignInProps } from '../../interfaces/interfaces';

import {
  styleCard,
  styleBox,
  styleTextField,
  styleButton,
  styleNavLink,
} from './styles';

function SignIn({ handleSignIn }: ISignInProps) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    handleSignIn(values);
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
            SignIn
          </Typography>
          <TextField
            error={!!errors.email}
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
            error={!!errors.password}
            helperText={errors.password}
            sx={styleTextField}
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            name="password"
            onChange={handleChange}
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
            SignIn
          </Button>
          <NavLink to={Urls.SIGN.UP} style={styleNavLink}>
            SignUp
          </NavLink>
        </Card>
      </Box>
    </Container>
  );
}

export default SignIn;
