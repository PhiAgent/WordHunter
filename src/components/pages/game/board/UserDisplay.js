import React, {useState} from "react";
import useMode from "../../../../context/GameContext";
import WordResponse from "./WordResponse";

const UserDisplay = ({ popUpClass, message, infoDisplay}) => {
  const {current} = useMode();

  return (
    <div className="word-display">
      <div></div>
        {!infoDisplay ? <ul className='guessed-word'>
          {
            current.toUpperCase().split('').map((letter, i) =>
              <li key={`letter${i}`}className="guessed-letter">{letter}</li>
            )
          }
          </ul> :
          <WordResponse message={message} popUpClass={popUpClass}/>
        }
      <div></div>
    </div>
  )
};

export default UserDisplay;