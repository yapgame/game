import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { SIGNUP_URL } from '../../utils/constants';

import { IProps } from './IProps';

function SignIn(props: IProps) {
  const { handleSignIn } = props;
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (evt: any) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    handleSignIn(data);
  };
  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit}>
        <Box
          gridColumn="span 1"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            minHeight: 600,
          }}
        >
          <Typography variant="h5" gutterBottom component="div">SignIn</Typography>
          <TextField
            sx={{ m: 1, width: '40ch' }}
            required
            id="outlined-required"
            label="E-mail"
            defaultValue=""
            name="email"
            onChange={handleChange}
          />
          <TextField
            sx={{ m: 1, width: '40ch' }}
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            name="password"
            onChange={handleChange}
          />
          <Button
            variant="outlined"
            size="large"
            sx={{ m: 1, width: '43ch' }}
            type="submit"
          >
            SignIn
          </Button>
          <Link href={SIGNUP_URL} underline="none">SignUp</Link>
        </Box>
      </form>
    </Container>
  );
}

export default SignIn;
