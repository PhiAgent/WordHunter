import React from 'react';
import useMode from '../../../context/GameContext';
import { getRandomWord } from '../../../utils/helperFunctions';

const EndButtons = () => {

  const {
          setGameOver,
          setPlayer,
          setUnScrambled,
          setLeaders,
        } = useMode();

  const newGame = () => {
    setGameOver(false);
    setUnScrambled(getRandomWord());
    setLeaders([]);
  }

  return (
    <div className='endButtons'>
      <div></div>
      <div className="endButtons">
        <div>
          <button
            className="btn btn-primary endGame"
          onClick={() => {
              setPlayer('');
              newGame();
            }
          }
          >
            &nbsp;End Game&nbsp;
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary endGame"
            onClick={() => newGame()}
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