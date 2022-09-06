import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import chat from 'Utils/chatApi';
import { useNavigate } from 'react-router-dom';
import { Urls } from 'Utils/constants';
import { styleBox } from './styles';
import { setChatData } from '../../chat/chatSlice';

function PageStart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartGame = () => {
    chat
      .createChat({ title: 'test' })
      .then((res: Response) => {
        const { id } = res as unknown as { id: number };
        console.log(id);
        localStorage.setItem('game', id.toString());
        dispatch(setChatData(id));
        navigate(Urls.MAIN.GAME);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
      </Box>
    </Container>
  );
}

export default PageStart;
