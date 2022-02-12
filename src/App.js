
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from "./components/pages/Login";
import Header from "./components/title/Header";
import { ContextProvider } from "./context/GameContext";
// import Game from "./components/pages/game/Game";
import LastPage from "./components/pages/endPages/LastPage";

const App = () => {

  return (
    <ContextProvider>
      <Header/>
      {/* <Login/> */}
      {/* <Game/> */}
      <LastPage/>
    </ContextProvider>
  );
}

export default App;
