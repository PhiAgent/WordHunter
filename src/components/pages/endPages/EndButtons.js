import React, { useState } from 'react';

const EndButtons = () => {

  return (
    <div className='endButtons'>
      <div></div>
      <div className="endButtons">
        <div>
          <button
            className="btn btn-primary endGame"
          // onClick={checkWord}
          >
            &nbsp;End Game&nbsp;
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary endGame"
            // onClick={reset}
          >
            Play Again!
          </button>
        </div>
      </div>
      <div></div>
    </div>
  )
};

export default EndButtons;