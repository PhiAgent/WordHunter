import React, {useState} from 'react';
import useMode from '../context/GameContext';

const Header = () => {
  const { lightMode, changeMode } = useMode();


  return (
    <header className={`title ${lightMode ? "dark" : ""}`}>
      <h1>Word Game</h1>
      <button onClick={() => changeMode()}>darkmode</button>
    </header>
  )
};

export default Header;