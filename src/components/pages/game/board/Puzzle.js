import React, { useState, useEffect } from 'react';
import { getRandomWord, shuffle, continousTense } from '../../../../utils/helperFunctions';
import {findScore} from '../../../../utils/scoreGenerator'
import Tile from './Tile';
import candidates from '../../../../utils/dictionary';
import useMode from '../../../../context/GameContext';
import UserDisplay from './UserDisplay';
import Timer from './Timer';
import axios from 'axios';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';

const timer = 120;

const Puzzle = () => {

  // Context
  const {
    score,
    setScore,
    enteredWords,
    setEnteredWords,
    currentEntry,
    setCurrentEntry,
    gameOver,
    setGameOver,
    unScrambled,
    setUnScrambled,
  } = useMode();

  // States
  const [word, setWord] = useState(shuffle(unScrambled));
  const [clear, clearBoard] = useState(false);
  const [timeLeft, setTime] = useState(timeLeft);
  const [popUpClass, setPopClass] = useState('');
  const [message, setMessage] = useState('');
  const [infoDisplay, setInfoDisplay] = useState(false);

  // Check if word is valid
  const checkWord = e => {
    e.preventDefault();
    let letters = currentEntry.toLowerCase();

    if(letters) {

      // Already Entered Word
      if(enteredWords.includes(letters)) {
        //transitions of already entered
        setPopClass('customWarning');
        setMessage(`Already tried that`);
      }
      // Valid Word
       else if ((letters in candidates[unScrambled]) || continousTense(unScrambled, letters)) {
        let points = findScore(letters);
        setScore(score + points);
        setEnteredWords([letters, ...enteredWords]);
        setMessage(`Great Job! +${points}`);
        setPopClass('customSuccess green');
      }
      // Word Too Short
      else if(letters.length < 3) {
        // transitions of tooShort
        setMessage('Too short');
        setPopClass('customDanger');
      }
      // Invalid Word
      else {
        // transitions for invalid
        setMessage('Not valid');
        setPopClass('customDanger');
      }
    }

    // Brief Display of Entered Word
    setInfoDisplay(true);
    const timer = setTimeout(
      () => {
        setInfoDisplay(false);
        setCurrentEntry('');
      }, 250
    );

    clearBoard(true);
  };

  useEffect(() => {

    setCurrentEntry('');
    setScore(0);
    setEnteredWords([]);
    clearBoard(true);
    setTime(timer);
    setWord(shuffle(unScrambled));
    setGameOver(false);

  }, [unScrambled]);

  const reset = () => {
    setUnScrambled(getRandomWord());
  };

  return (
    <div
      className="puzzle"
    >
      <UserDisplay popUpClass={popUpClass} message={message} infoDisplay={infoDisplay}/>
      <div
        className='buttonRow'
      >
        <div></div>
      <button
        className="btn btn-primary submit"
        onClick={checkWord}
      >
        Submit
      </button>
        <div></div>
      </div>
      <ul
        className='puzzle-board'
      >
        {
          word.toUpperCase().split('').map((letter, i) =>
          <Tile
            key={`letter${i}`}
            letter={letter}
            clear={clear}
            clearBoard={clearBoard}
            currentEntry={currentEntry}
            setCurrentEntry={setCurrentEntry}
          />
          )
        }
      </ul>
      <div
        className='timerRow'
      >
        <div></div>
        <Timer
          setTime={setTime}
          timeLeft={timeLeft}
          unScrambled={unScrambled}
        />
        <div></div>
      </div>
      <div className='stopGameRow'>
        <div></div>
        <div className="stopButtons">
          <div>
            <button
            className="btn btn-primary quitGame"
              onClick={() => {
                  setTime('End Game');
                  // setEndStatus(false);
                }
              }
            >
              &nbsp;Quit&nbsp;
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary reset"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
};

export default Puzzle;