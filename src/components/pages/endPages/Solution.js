import React, { useState } from 'react';
import useMode from '../../../context/GameContext';
import { findSolutionWords } from '../../../utils/helperFunctions';
import {findScore} from '../../../utils/scoreGenerator';

const SolutionWords = () => {
  const { enteredWords } = useMode();
  const solutionWords = findSolutionWords('appeasing');

  return (
    <div className='solutionWords'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Word</th>
            <th scope="col"><div className='col2'>Points</div></th>
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
                  {enteredWords.includes(word) ? <i className="bi bi-check2-all check"></i> : ""}
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

export default SolutionWords;