import React, {useState} from 'react';
import useMode from '../../context/GameContext';
import Help from './Help';
import Settings from './Settings';

const Header = () => {
  const { lightMode, changeMode, changeColorBlind, colorBlind } = useMode();


  return (
    <header className="title">
      <Help/>
      <h1>Word Game</h1>
      <Settings />
    </header>
  )
};

export default Header;

// color blind is for changing only green to
// orange