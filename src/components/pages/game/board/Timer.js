import React, { useState, useEffect } from 'react';
import { secondsToMinutes } from '../../../../utils/helperFunctions';



const Timer = ({ setGameOver, setTime, timeLeft, clear, clearBoard }) => {

  const [count, setCount] = useState(-1);

  useEffect(() => {
    let timeOut, latest = true;

    if (timeLeft >= 0) {
      timeOut = setTimeout(() => {
        if (latest) setTime(timeLeft - 1)
      }, 1000);
    } else {
      setTime("Game Over!");
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
    <span>
      Timer: {secondsToMinutes(timeLeft)}
    </span>
  )
}

export default Timer;