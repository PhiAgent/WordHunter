import React, { useState } from "react";
import useMode from "../../../context/GameContext";
import Leaderboard from "./Leaderboard";
import SolutionWords from "./Solution";

const EndedGame = () => {

  const {leaders} = useMode();
  const [presentLeaders, setLeaders] = useState(false);
  const [words, setWords] = useState(true);

  const showWords = () => {
    setLeaders(false);
    setWords(true);
  };

  const showLeaders = () => {
    setLeaders(true);
    setWords(false);
  };


  return (
    <div className="wrapper">
      <div></div>
      <div className='gameOver'>
        <div className="gameOverDisplay">
          <div className="wordsOrLeaders">
            <div>
              <button
                className="btn btn-primary tabs tabs1"
                onClick={showWords}
              >
                &nbsp;WORDS&nbsp;
              </button>
            </div>
            {
              leaders.length ?
              <div>
                <button
                  className="btn btn-primary tabs tabs2"
                  onClick={showLeaders}
                >
                  TOP SCORERS
                </button>
              </div> :
              ""
            }
          </div>
          <div className="tables">
            {
              leaders.length ?
                <div className="gameEnded">
                  {presentLeaders ?
                    <Leaderboard />:
                    <SolutionWords />
                  }
                </div>:
                <SolutionWords />
            }
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
};

export default EndedGame;

