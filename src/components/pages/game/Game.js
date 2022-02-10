import React, { useState } from 'react';
import useMode from '../../../context/GameContext';
import Board from './board/Board';
import ScoreBoard from './ScoreBoard';

const Game = () => {

  return (
    <div className="game">
      <ScoreBoard/>
      <Board/>
    </div>
  )
};

export default Game;