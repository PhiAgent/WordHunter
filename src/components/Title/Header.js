import React, {useState} from 'react';
import useMode from '../../context/GameContext';
import Settings from './Settings';

const Header = () => {
  const { lightMode, changeMode, changeColorBlind, colorBlind } = useMode();


  return (
    <header className={`title ${lightMode ? "dark" : ""} ${colorBlind ? "color-blind":""}`}>
      <i className="bi bi-question-circle"></i>
      <h1>Word Game</h1>
      <button onClick={() => changeMode()}>darkmode</button>
      <Settings/>
      <button onClick={() => changeColorBlind()}>colorBlind</button>
    </header>
  )
};

export default Header;