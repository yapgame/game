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

function SignIn(props: ISignInProps) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();
  const { handleSignIn } = props;
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
        sx={{
          '& .MuiTextField-root': { m: 2 },
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
          <Typography variant="h5" gutterBottom component="div">
            SignIn
          </Typography>
          <TextField
            error={!!errors.email}
            sx={{
              m: 2,
              maxWidth: '40ch',
              width: '100%',
            }}
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
            sx={{
              m: 2,
              maxWidth: '40ch',
              width: '100%',
            }}
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
            sx={{
              m: 4,
              maxWidth: '43ch',
              width: '100%',
            }}
            type="submit"
            disabled={!isValid}
          >
            SignIn
          </Button>
          <NavLink
            to={Urls.SIGNUP}
            style={{
              margin: '0',
              color: '#1976d2',
              textDecoration: 'none',
            }}
          >
            SignUp
          </NavLink>
        </Card>
      </Box>
    </Container>
  );
}

export default SignIn;
