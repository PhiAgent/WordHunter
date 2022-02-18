import React from 'react';
import Help from './Help';
import Settings from './Settings';

const Header = () => {


  return (
    <header className="title">
      <Help/>
      <h1>Word Hunter</h1>
      <Settings />
    </header>
  )
};

export default Header;
