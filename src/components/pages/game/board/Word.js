import React, {useState} from "react";

const Word = () => {
  const [word, setWord] = useState('testifies');

  return (
    <div className="word-display">
      <div></div>
      <ul className='guessed-word'>
        {
          word.toUpperCase().split('').map((letter, i) =>
            <li key={`letter${i}`}className="guessed-letter">{letter}</li>
          )
        }
      </ul>
      <div></div>
    </div>
  )
};

export default Word;