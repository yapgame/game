import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import auth from 'Utils/authApi';
import { IUser } from 'Interfaces/IUser';

function SearchBox({ setOpen, setResult }: {
  setOpen: (o: boolean) => void, setResult: (u: IUser[]) => void}) {
  const [values, setValues] = React.useState<Record<string, string>>({});

  const handleFindUser = (evt: React.FormEvent) => {
    evt.preventDefault();

    auth
      .findUser(values)
      .then((res: Response) => {
        setOpen(true);
        const reUsers = res as unknown as IUser[];
        setResult(reUsers);
        console.log(res);
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
        label="Outlined"
        variant="outlined"
      />
      <IconButton
        type="submit"
        color="primary"
        aria-label="upload picture"
        component="button"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchBox;
