/* eslint-disable camelcase */
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IValid } from './IValid';
import useFormWithValidation from '../../utils/validator';
import { IProps } from './IProps';
import { Urls } from '../../utils/constants';

function Profile(props: IProps) {
  const {
    login = '1',
    score = '2',
    email = '3',
    first_name,
    second_name,
    display_name,
    phone,
  } = props;

  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    console.log(values);
    // handleSignIn(values);
  };

  React.useEffect(() => {
    values.score = score;
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
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          minHeight: 800,
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Edit profile
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
          name="login"
          onChange={handleChange}
          defaultValue={login}
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
          name="display_name"
          onChange={handleChange}
          defaultValue={display_name}
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
          name="first_name"
          onChange={handleChange}
          defaultValue={first_name}
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
          name="second_name"
          onChange={handleChange}
          defaultValue={second_name}
          helperText={errors.second_name}
          type="second_name"
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
          name="email"
          onChange={handleChange}
          defaultValue={email}
          helperText={errors.email}
          type="email"
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
          name="phone"
          onChange={handleChange}
          defaultValue={phone}
          helperText={errors.phone}
          type="phone"
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
          Save
        </Button>
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
      </Box>
    </Container>
  );
}

export default Profile;
