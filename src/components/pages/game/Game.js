import React, { useState } from 'react';
import useMode from '../../context/GameContext';
import ScoreBoard from './Scoreboard';

const Game = () => {

  return (
    <div>
      <ScoreBoard/>
    </div>
  )
};

export default Game;