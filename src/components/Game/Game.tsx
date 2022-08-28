import * as React from 'react';
import Chat from './Chat';
import PaintBoard from './PaintBoard';
import { cards } from '../../utils/arrayCards';

function Game() {
  console.log(cards);
  return (
    <>
      <Chat />
      <PaintBoard />
    </>
  );
}

export default Game;
