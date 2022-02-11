import React, { useState, useEffect } from 'react';
import { getRandomWord, shuffle } from '../../../../utils/helperFunctions';
import {findScore} from '../../../../utils/scoreGenerator'
import Tile from './Tile';
import candidates from '../../../../utils/dictionary';
import useMode from '../../../../context/GameContext';
import Word from './Word';

const Puzzle = () => {

  // States
  const [unScrambled, setUnScrambled] = useState(getRandomWord())
  const [word, setWord] = useState(shuffle(unScrambled));
  const [clear, clearBoard] = useState(false);
  const [timeLeft, setTime] = useState(120);
  const { score, setScore, enteredWords, setEnteredWords, current, setCurrent} = useMode();

  // Check if word is valid
  const checkWord = e => {
    e.preventDefault();
    let letters = current.toLowerCase();

    if(letters) {
      if(letters in enteredWords) {
        //transitions of already entered
      } else if (letters in candidates[unScrambled]) {
        let points = findScore(letters);
        setScore(score + points);
        setEnteredWords([letters, ...enteredWords]);
      } else {
        // transitions of invalid word
      }
    }
    setCurrent('');
    clearBoard(true);
  };

  // useEffect(() => {
  //   setCurrent('');
  //   setScore(0);
  //   setEnteredWords([]);
  //   clearBoard(true);
  //   setTime(120);
  // }, [word]);

  const reset = () => {
    setUnScrambled(getRandomWord());
  };

  return (
    <div className="puzzle">
      <Word/>
      <div className='buttonRow'>
        <div></div>
      <button className="btn btn-primary" onClick={checkWord}>Submit</button>
        <div></div>
      </div>
      <ul className='puzzle-board'>
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
    </div>
  )
};

export default Puzzle;