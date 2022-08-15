import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { SIGNUP_URL } from '../../utils/constants';
import useFormWithValidation from '../../utils/validator';

import { IProps } from './IProps';
import { IValid } from './IValid';

function SignIn(props: IProps) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();
  const { handleSignIn } = props;
  const handleSubmit = (evt: any) => {
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
          label="E-mail"
          defaultValue=""
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          type="email"
        />
        <TextField
          error={!!errors.password}
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
          to={SIGNUP_URL}
          style={{
            margin: '0',
            color: '#1976d2',
            textDecoration: 'none',
          }}
        >
          SignUp
        </NavLink>
      </Box>
    </Container>
  );
}

export default SignIn;
