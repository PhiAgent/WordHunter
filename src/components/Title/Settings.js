import React, { useState } from 'react';
import useMode from '../../context/GameContext';

const Settings = () => {
  const { lightMode, changeMode, changeColorBlind, colorBlind } = useMode();

  return (
    <div>
      <i className="bi bi-gear-fill" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </i>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className={`modal-content ${lightMode ? "dark" : ""} ${colorBlind ? "color-blind" : ""}`}>
            <div className="modal-header">
              <div></div>
              <div>
                <h5 className="modal-title" id="exampleModalLabel">Settings</h5>
              </div>
              <div><i className="bi bi-x"
                data-bs-dismiss="modal" aria-label="Close"
              ></i></div>
            </div>
            <div className="modal-body">
              <div className="toggleButtons Dark">
                <span>&nbsp;&nbsp;&nbsp;Dark Mode</span>
                {lightMode
                    ? <i className="bi  bi-toggle-on settings" onClick={changeMode}></i>
                  : <i className="bi  bi-toggle-off settings" onClick={changeMode}></i>
                  }
              </div>
              <div className="toggleButtons ColorBlind">
                <span>&nbsp;&nbsp;&nbsp;Color Blind Mode</span>
                {colorBlind
                  ? <i className="bi  bi-toggle-on settings" onClick={changeColorBlind}></i>
                  : <i className="bi  bi-toggle-off settings" onClick={changeColorBlind}></i>
                }
              </div>
            </div>
            <div className="modal-footer">
              <div>If you're enjoying this game, you can star this repo on Github</div>
              <div>
                <a
                  href=""
                  target="_blank"
                ><i class="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Settings;

// notes
// the settings button when clicked
// will present a modal
// the modal will hava an option for
// dark mode
// and colorblind mode
// and option for feedback
// with links to the twitter and social