import React, { useState, useEffect } from 'react';
import { secondsToMinutes } from '../../../../utils/helperFunctions';
import useMode from '../../../../context/GameContext';


const Timer = ({ setGameOver, setTime, timeLeft, clear, clearBoard }) => {

  const [count, setCount] = useState(-1);
  const {score} = useMode();

  useEffect(() => {
    let timeOut, latest = true;

    if (timeLeft > 0) {
      timeOut = setTimeout(() => {
        if (latest) setTime(timeLeft - 1)
      }, 1000);
    } else {
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
        </i>
        {secondsToMinutes(timeLeft)}
      </h2>
    </div>
  )
};

export default Timer;
