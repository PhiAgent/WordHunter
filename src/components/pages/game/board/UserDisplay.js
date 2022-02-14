import React, {useState} from "react";
import useMode from "../../../../context/GameContext";
import WordResponse from "./WordResponse";

const UserDisplay = ({ popUpClass, message, infoDisplay}) => {
  const {currentEntry} = useMode();

  return (
    <div className="word-display">
      <div></div>
        <ul className='guessed-word'>
          {
            currentEntry.toUpperCase().split('')
            .map((letter, i) =>
              <li
                key={`letter${i}`}
                className={`guessed-letter
                  ${infoDisplay ?
                    popUpClass :
                    ""
                  }
                `}
              >
                {letter}
              </li>
            )
          }
        </ul>
      <div></div>
    </div>
  )
};

export default UserDisplay;