import React from 'react';
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