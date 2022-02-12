import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScoreBoard from "../game/Scoreboard";
import EndButtons from "./EndButtons";
import SolutionWords from "./Solution";


const LastPage = () => {

  return (
    <div className="endGame">
      <ScoreBoard/>
      {/* endedgame or gameover */}
      <EndButtons/>
    </div>
  )
};

export default LastPage;