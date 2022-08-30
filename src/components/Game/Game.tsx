import * as React from 'react';
import Chat from './Chat';
import PaintBoard from './PaintBoard';
import { cards } from '../../utils/arrayCards';

function Game() {
  console.log(cards);
  return (
    <>
      <p>ID chat from start game</p>
      <p>need tape</p>
      <p>WebSoket</p>
      <p>+ board</p>
      <Chat />
      <PaintBoard />
    </>
  );
}

export default Game;
