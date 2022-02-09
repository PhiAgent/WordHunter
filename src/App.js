
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from "./components/title/Header";
import { ContextProvider } from "./context/GameContext";

const App = () => {

  return (
    <ContextProvider>
      <Header/>
    </ContextProvider>
  );
}

export default App;
