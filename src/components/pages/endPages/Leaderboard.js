import React, { useState } from 'react';
import useMode from '../../../context/GameContext';


const Leaderboard = () => {
  const {leaders, currentPlayer} = useMode;

  return (
    <div className='leaderBoard'>
      <h2>LEADERBOARD</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">
              <div className='col2'>Ranking
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            solutionWords.map((word, i) =>
              <tr
                key={`word${i}`}
                className={`${enteredWords.includes(word) ? "highlight green" : ""}`}
              >
                <td>
                  <span>{word}</span>
                  &nbsp;
                  &nbsp;
                  {enteredWords.includes(word) ? <i class="bi bi-check2-all check"></i> : ""}
                </td>
                <td scope="col">
                  <div className={`col2`}>
                    <span>{findScore(word)}
                    </span>
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
};

export default Leaderboard;