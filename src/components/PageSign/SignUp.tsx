import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

function SignUp() {
  const handleSignUp = (evt: any) => {
    evt.preventDefault();
    // => change => form => submit
    console.log(evt);
  };

  return (
    <Container maxWidth="lg">
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
        <Typography variant="h5" gutterBottom component="div">SignUp</Typography>

        <TextField
          sx={{ m: 1, width: '40ch' }}
          required
          id="outlined-required"
          label="E-mail"
          defaultValue=""
        />

        <TextField
          sx={{ m: 1, width: '40ch' }}
          required
          id="outlined-required"
          label="Password"
          defaultValue=""
        />

        <Button
          variant="outlined"
          size="large"
          sx={{ m: 1, width: '43ch' }}
          onClick={handleSignUp}
        >
          SignUp
        </Button>

        <Link href="/signin" underline="none">SignIn</Link>
      </Box>
    </Container>
  );
}

export default SignUp;
