import React, { useState } from 'react';
import useMode from '../../context/GameContext';

const Help = () => {
  const { lightMode, changeMode, changeColorBlind, colorBlind } = useMode();

  return (
    <div>
      <i className="bi bi-question-circle" data-bs-toggle="modal" data-bs-target="#helpModal">
      </i>
      <div className="modal fade" id="helpModal" tabIndex="-1" aria-labelledby="helpModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className={`modal-content ${lightMode ? "" : "dark"}`}>
        <div className="modal-header">
          <div></div>
          <div>
            <h5 className="modal-title" id="helpModalLabel">How to play</h5>
          </div>
          <div><i className="bi bi-x"
            data-bs-dismiss="modal" aria-label="Close"
          ></i></div>
        </div>
        <div className="modal-body">
          <ul>
              <li className="mb-2">You have 2 minutes to guess as many words as you can.</li>
              <li className="mb-2">Enter submit to submit the word.</li>
              <li className="mb-2">The longer the word, the more points you get.</li>
              <li className="mb-2">Watch out, there's always a 9 letter word!</li>
          </ul>
        </div>
        <div className="modal-footer">
          <div>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            ><span>Open-source code</span>
            </a>&nbsp;&nbsp;
                <span>by&nbsp;&nbsp;</span>
            <a
                href="https://www.linkedin.com/in/prince-gyekye-addai/"
              target="_blank"
              rel="noreferrer"
                ><span>Prince Addai</span>
            </a>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Help;