import React, { useState } from "react";
import useMode from "../../../context/GameContext";
import Leaderboard from "./Leaderboard";
import SolutionWords from "./Solution";

const EndedGame = () => {

  const {endStatus} = useMode();
  const [leaders, setLeaders] = useState(false);
  const [words, setWords] = useState(true);

  const showWords = () => {
    setLeaders(false);
    setWords(true);
  };

  const showLeaders = () => {
    setLeaders(true);
    setWords(false);
  }


  return (
    <div class="wrapper">
      <div></div>
      <div className='gameOver'>
        <div className="gameOverDisplay">
          <div className="wordsOrLeaders">
            <div>
              <button
                className="btn btn-primary tabs"
                onClick={showWords}
              >
                &nbsp;WORDS&nbsp;
              </button>
            </div>
            <div>
              <button
                className="btn btn-primary tabs"
                onClick={showLeaders}
              >
                LEADERBOARD
              </button>
            </div>
          </div>
          <div className="tables">
            {
              endStatus ?
                <div className="gameEnded">
                  {leaders ?
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

