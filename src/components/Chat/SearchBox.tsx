import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import auth from 'Utils/authApi';
import { IUser } from 'Interfaces/IUser';
import Typography from '@mui/material/Typography';

function SearchBox({ setOpen, setResult, stringId }: {
  setOpen: (o: boolean) => void, setResult: (u: IUser[]) => void, stringId: string|null}) {
  const [values, setValues] = React.useState<Record<string, string>>({});

  const handleFindUser = (evt: React.FormEvent) => {
    evt.preventDefault();

    auth
      .findUser(values)
      .then((res: Response) => {
        setOpen(true);
        const reUsers = res as unknown as IUser[];
        setResult(reUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { name, value } = target;

    setValues({ ...values, [name]: value });
  };

  return (
    <Box
      component="form"
      onSubmit={handleFindUser}
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        name="login"
        onChange={handleChange}
        size="small"
        id="outlined-basic"
        label="User's login..."
        variant="outlined"
      />
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="button"
        type="submit"
      >
        <SearchIcon />
      </IconButton>
      <Typography
        sx={{ marginTop: 5 }}
        variant="h6"
        gutterBottom
        component="div"
      >
        {`Room: ${stringId || ''}`}
      </Typography>
    </Box>
  );
}

export default SearchBox;
