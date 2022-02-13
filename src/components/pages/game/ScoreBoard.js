import React, { useState } from 'react';
import useMode from '../../../context/GameContext';

const ScoreBoard = () => {
  const {score, enteredWords} = useMode();

  return (
    <div className="score-board">
      <div></div>
      <div className="score-content">
      <div className="words">
        <small className="words-title">Words
        </small>
          <div className="count">{enteredWords.length}
          </div>
      </div>
      <div className="score green">
        <small className="score-title">Score
        </small>
          <div className="count">{score}
          </div>
      </div>
      </div>
      <div></div>
    </div>
  )
};

export default ScoreBoard;