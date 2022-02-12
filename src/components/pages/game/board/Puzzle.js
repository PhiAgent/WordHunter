import React, { useState, useEffect } from 'react';
import { getRandomWord, shuffle, continousTense } from '../../../../utils/helperFunctions';
import {findScore} from '../../../../utils/scoreGenerator'
import Tile from './Tile';
import candidates from '../../../../utils/dictionary';
import useMode from '../../../../context/GameContext';
import UserDisplay from './UserDisplay';
import Timer from './Timer';
import axios from 'axios';
import url from '../../../../../server/url';

const timer = 120;

const Puzzle = () => {

  // States
  const [unScrambled, setUnScrambled] = useState(getRandomWord());
  const [word, setWord] = useState(shuffle(unScrambled));
  const [clear, clearBoard] = useState(false);
  const [timeLeft, setTime] = useState(timer);
  const [popUpClass, setPopClass] = useState('');
  const [message, setMessage] = useState('');
  const [infoDisplay, setInfoDisplay] = useState(false);
  const {
          score,
          setScore,
          enteredWords,
          setEnteredWords,
          current,
          setCurrent,
          setLeaders
        } = useMode();
  const [gameOver, setGameOver] = useState(false);

  // Check if word is valid
  const checkWord = e => {
    e.preventDefault();
    let letters = current.toLowerCase();

    if(letters) {
      if(enteredWords.includes(letters)) {
        //transitions of already entered
        setPopClass('warning');
        setMessage(`Already tried that`);
      } else if ((letters in candidates[unScrambled]) || continousTense(unScrambled, letters)) {
        let points = findScore(letters);
        setScore(score + points);
        setEnteredWords([letters, ...enteredWords]);
        setMessage(`Great Job! +${points}`);
        setPopClass('success');
      } else if(letters.length < 3) {
        // transitions of tooShort
        setMessage('Too short');
        setPopClass('danger');
      } else {
        // transitions for invalid
        setMessage('Not valid');
        setPopClass('danger');
      }
    }
    setInfoDisplay(true);
    // const timer = setTimeout(() => setInfoDisplay(false), 1500);
    setCurrent('');
    clearBoard(true);
  };

  useEffect(() => {
    let latest = true;
    axios
      .get(
        `${url}/leaders`, {
        params: {'word': unScrambled},
      })
      .then(result =>
              latest && setLeaders(result.data)
            )
      .catch(err => console.error(err));
    setCurrent('');
    setScore(0);
    setEnteredWords([]);
    clearBoard(true);
    setTime(timer);
    setWord(shuffle(unScrambled));
    setGameOver(false);

    return () => latest = false;
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
        className="btn btn-primary"
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
            current={current}
            setCurrent={setCurrent}
          />
          )
        }
      </ul>
      <div
        className='timerRow'
      >
        <div></div>
        <Timer
          clear={clear}
          clearBoard={clearBoard}
          setGameOver={setGameOver}
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
            className="btn btn-primary endGame"
          // onClick={checkWord}
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