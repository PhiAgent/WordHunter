import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScoreBoard from "../game/Scoreboard";
import EndButtons from "./EndButtons";
import SolutionWords from "./Solution";
import EndedGame from "./EndsGame";


const LastPage = () => {

  return (
    <div className="endGamePage">
      <ScoreBoard/>
      <EndedGame/>
      <EndButtons/>
    </div>
  )
};

export default LastPage;