import React, {useState} from 'react';
import useMode from '../context/GameContext';

const Header = () => {
  const { darkTheme, toggleTheme } = useMode();


  return (
    <header className="">
      Word Game
    </header>
  )
};

export default Header;