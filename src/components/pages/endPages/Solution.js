import React, { useState } from 'react';
import useMode from '../../../context/GameContext';
import {findScore} from '../../../utils/scoreGenerator';

const SolutionWords = () => {
  const { enteredWords } = useMode();

  return (
    <div className='solutionWords'>
      <h2>Words</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Word</th>
            <th scope="col"><div className='col2'>Points</div></th>
          </tr>
        </thead>
        <tbody>
          {
            enteredWords.map((word, i) =>
              <tr key={`word${i}`}>
                <td>{word}</td>
                <td scope="col"><div className='col2'>{findScore(word)}</div></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
};

export default SolutionWords;