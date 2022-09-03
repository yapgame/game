import * as React from 'react';
import { cards } from 'Utils/arrayCards';
import Chat from './Chat';
import PaintBoard from './PaintBoard';

function Game() {
  console.log(cards);
  return (
    <>
      <PaintBoard />
      <Chat />
    </>
  );
}

export default Game;
