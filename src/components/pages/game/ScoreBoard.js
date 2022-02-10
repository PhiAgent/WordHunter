import React, { useState } from 'react';
import useMode from '../../context/GameContext';

const ScoreBoard = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <div className="words">
        <small className="wordsTitle"></small>
        <p className="count"></p>
      </div>
      <div className="score">
        <small className="scoreTitle"></small>
        <p className="count"></p>
      </div>
    </div>
  )
}

export default ScoreBoard;