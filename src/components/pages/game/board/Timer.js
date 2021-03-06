import React, { useState, useEffect } from 'react';
import { secondsToMinutes, updateLeaders } from '../../../../utils/helperFunctions';
import useMode from '../../../../context/GameContext';
import axios from 'axios';
const url = require('../../../../../server/url');


const Timer = ({
                  setTime,
                  timeLeft,
                  unScrambled
                }) => {

  const [count, setCount] = useState(-1);

  const {
          score,
          leaders,
          setLeaders,
          currentPlayer,
          setGameOver,
          gameOver,
        } = useMode();

  useEffect(() => {
    let timeOut, latest = true;

    if (timeLeft > 0) {

      timeOut = setTimeout(() => {
        if (latest) setTime(timeLeft - 1);
      }, 1000);

    } else if (timeLeft === 0) {
      let leaderCopy = JSON.parse(JSON.stringify(leaders));
      let newLeaderFound = updateLeaders(leaderCopy, score, currentPlayer);
      if (newLeaderFound){
        setLeaders(leaderCopy);
        axios
          .post(`${url}/leaders`, {
            word: unScrambled,
            username: currentPlayer,
            score
          })
          .then(result => result.data)
          .catch(err => console.error(err));
      }
      setGameOver(true);
      clearTimeout(timeOut);
    } else if (timeLeft === 'End Game') {
      setGameOver(true);
    }

    // Fetch highest scorers 5s before gameover
    if(timeLeft === 5) {
      axios
        .get(
          `${url}/leaders`,
          {
          params: { 'word': unScrambled },
          }
        )
        .then(result =>
          setLeaders(result.data)
          // !gameOver && setLeaders(result.data);
        )
        .catch(err => console.error(err));
    }

    // Avoid race condition
    return () => {
      latest = false;
      clearTimeout(timeOut);
    }
  }, [timeLeft]);

  return (
    <div className='timerDisplay'>
      <h2>
        <i
          className="bi bi-stopwatch-fill timer">
        </i>&nbsp;
        <span className='timeLeft'>{secondsToMinutes(timeLeft)}</span>
      </h2>
    </div>
  )
};

export default Timer;
