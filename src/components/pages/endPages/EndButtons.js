import React, { useState } from 'react';
import useMode from '../../../context/GameContext';
import { getRandomWord } from '../../../utils/helperFunctions';

const EndButtons = () => {

  const {
          setGameOver,
          setPlayer,
          setUnScrambled
        } = useMode();

  return (
    <div className='endButtons'>
      <div></div>
      <div className="endButtons">
        <div>
          <button
            className="btn btn-primary endGame"
          onClick={() => {
              setPlayer('');
              setGameOver(false);
              setUnScrambled(getRandomWord());
            }
          }
          >
            &nbsp;End Game&nbsp;
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary endGame"
            onClick={() => {
                setGameOver(false);
                setUnScrambled(getRandomWord());
              }
            }
          >
            Play Again!
          </button>
        </div>
      </div>
      <div></div>
    </div>
  )
};

export default EndButtons;