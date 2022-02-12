import React, { useState, useEffect } from 'react';
import { secondsToMinutes, updateLeaders } from '../../../../utils/helperFunctions';
import useMode from '../../../../context/GameContext';
import axios from 'axios';
const url = require('../../../../../server/url');


const Timer = ({ setGameOver, setTime, timeLeft, clear, clearBoard, unScrambled }) => {

  const [count, setCount] = useState(-1);
  const { score, leaders, setLeaders, currentPlayer} = useMode();

  useEffect(() => {
    let timeOut, latest = true;

    if (timeLeft > 0) {
      timeOut = setTimeout(() => {
        if (latest) setTime(timeLeft - 1);
      }, 1000);
    } else {
      let leaderCopy = JSON.parse(JSON.stringify(leaders));
      let newLeaderFound = updateLeaders(leaderCopy, score, currentPlayer);
      if (newLeaderFound){
        axios
          .post(`${url}/leaders`, {
            word: unScrambled,
            username: currentPlayer,
            score
          })
          .then(result => result.data)
          .catch(err => console.error(err));
        setLeaders(leaderCopy);
      }
      setGameOver(true);
      clearTimeout(timeOut);
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
        {secondsToMinutes(timeLeft)}
      </h2>
    </div>
  )
};

export default Timer;
