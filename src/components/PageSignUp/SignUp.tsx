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

import { IValid, ISignUpProps } from '../../interfaces/interfaces';

function SignUp(props: ISignUpProps) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();
  const { handleSignUp } = props;
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
        sx={{
          '& .MuiTextField-root': { m: 2 },
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          minHeight: 1000,
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 400,
            minHeight: 900,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom component="div">
            SignUp
          </Typography>
          <TextField
            error={!!errors.login}
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
            error={!!errors.display_name}
            sx={{
              m: 2,
              maxWidth: '40ch',
              width: '100%',
            }}
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
            sx={{
              m: 2,
              maxWidth: '40ch',
              width: '100%',
            }}
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
            sx={{
              m: 2,
              maxWidth: '40ch',
              width: '100%',
            }}
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
            sx={{
              m: 2,
              maxWidth: '40ch',
              width: '100%',
            }}
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
            SignUp
          </Button>
          <NavLink
            to={Urls.SIGNIN}
            style={{
              margin: '0',
              color: '#1976d2',
              textDecoration: 'none',
            }}
          >
            SignIn
          </NavLink>
        </Card>
      </Box>
    </Container>
  );
}

export default SignUp;
