import React, {useState} from "react";
import useMode from "../../../../context/GameContext";

const Word = () => {
  const {current} = useMode();

  return (
    <div className="word-display">
      <div></div>
      <ul className='guessed-word'>
        {
          current.toUpperCase().split('').map((letter, i) =>
            <li key={`letter${i}`}className="guessed-letter">{letter}</li>
          )
        }
      </ul>
      <div></div>
    </div>
  )
};

export default Word;