import React from 'react';
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
            leaders
              .sort((leader1, leader2) => leader1.score > leader2.score ? -1 : 1)
              .map((leader, i) =>
              <tr
                key={`leader${i}`}
                className={`${currentPlayer === leader.username ? "highlight" : ""}`}
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