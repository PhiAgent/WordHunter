
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from "./components/pages/Login";
import Header from "./components/title/Header";
import useMode from "./context/GameContext";
import Game from "./components/pages/game/Game";
import LastPage from "./components/pages/endPages/LastPage";

const App = () => {

  const {
          currentPlayer,
          gameOver,
          lightMode,
          changeColorBlind,
          changeMode,
          colorBlind,
        } = useMode();

  // Appropriately attach Dark/Colorblind Mode
  if(!lightMode && !document.body.classList.contains('dark'))
    document.body.classList.add('dark');
  if (colorBlind && !document.body.classList.contains('color-blind'))
    document.body.classList.add('color-blind');

  return (
    <div className="app">
      <Header/>
      {!currentPlayer && <Login />}
      {currentPlayer && !gameOver && <Game/> }
      {currentPlayer && gameOver && <LastPage/>}
    </div>
  );
}

export default App;
