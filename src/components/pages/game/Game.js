import React, { useState } from 'react';
import useMode from '../../../context/GameContext';
import ScoreBoard from './ScoreBoard';

const Game = () => {

  return (
    <div className="container">
      <ScoreBoard/>
      <div></div>
    </div>
  )
};

export default Game;