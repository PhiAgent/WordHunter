
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
          gameOver
        } = useMode();

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
