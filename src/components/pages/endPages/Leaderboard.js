import React, { useState } from 'react';
import useMode from '../../../context/GameContext';


const Leaderboard = () => {
  const {leaders, currentPlayer} = useMode();

  return (
    <div className='leaderBoard'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">
              <div className='col2'>Score
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            leaders.map((leader, i) =>
              <tr
                key={`leader${i}`}
                className={`${currentPlayer === leader.username ? "highlight green" : ""}`}
              >
                <td>
                  {leader.username}
                </td>
                <td scope="col">
                  <div className={`col2`}>
                    <span>{leader.score}
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