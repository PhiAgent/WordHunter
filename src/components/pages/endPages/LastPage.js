import React from "react";
import ScoreBoard from "../game/Scoreboard";
import EndButtons from "./EndButtons";
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