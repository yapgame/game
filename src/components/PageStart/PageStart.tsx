import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import chat from 'Utils/chatApi';
import { useNavigate } from 'react-router-dom';
import { Urls } from 'Utils/constants';
import TextField from '@mui/material/TextField';
import { styleTextField } from 'Components/PageSignUp/styles';
import { setChatData } from '../../slices/chat/chatSlice';
import { styleBox } from './styles';

function PageStart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({ message: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;

    setValues({ ...values, [name]: value });
  };

  const handleStartGame = () => {
    chat
      .createChat({ title: 'test' })
      .then((res: Response) => {
        const { id } = res as unknown as { id: number };
        localStorage.setItem('game', id.toString());
        dispatch(setChatData(id));
        navigate(Urls.MAIN.GAME);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleJoinGame = (evt: React.FormEvent) => {
    evt.preventDefault();

    const { room }: Record<string, string> = values;
    localStorage.setItem('game', room);
    dispatch(setChatData(room));
    navigate(Urls.MAIN.GAME);
  };

  return (
    <Container maxWidth="lg">
      <Box gridColumn="span 1" sx={styleBox}>
        <Typography variant="h2" gutterBottom component="div">
          New Game
        </Typography>
        <Button variant="outlined" onClick={handleStartGame}>
          Start
        </Button>
        <TextField
          sx={styleTextField}
          required
          id="outlined-required"
          label="Room"
          defaultValue=""
          name="room"
          onChange={handleChange}
          type="room"
        />
        <Button variant="outlined" onClick={handleJoinGame}>
          Join
        </Button>
      </Box>
    </Container>
  );
}

export default PageStart;
