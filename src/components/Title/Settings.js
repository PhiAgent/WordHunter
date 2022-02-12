import React from 'react';
import useMode from '../../context/GameContext';

const Settings = () => {
  const { lightMode, changeMode, changeColorBlind, colorBlind } = useMode();

  return (
    <div>
      <i
        className="bi bi-gear-fill"
        data-bs-toggle="modal"
        data-bs-target="#settingsModal"
      >
      </i>
        <div
          className="modal fade"
          id="settingsModal" tabIndex="-1"
          aria-labelledby="settingsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className={
                `modal-content ${
                  lightMode ? "" : "dark"
                }`
              }
            >
          <div className="modal-header">
            <div></div>
            <div>
              <h5
                className="modal-title"
                id="settingsModalLabel"
              >
                Settings
              </h5>
            </div>
            <div>
              <i
                className="bi bi-x"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></i>
            </div>
          </div>
          <div className="modal-body">
              <div className="toggleButtons Dark">Dark Mode&nbsp;&nbsp;&nbsp;
                <i
                  className={
                  `${
                    lightMode ?
                      "bi bi-toggle-off settings" :
                      "bi  bi-toggle-on settings"
                    }`
                  }
                  onClick={changeMode}></i>
            </div>
              <div
                className="toggleButtons ColorBlind"
              >
                Color Blind Mode&nbsp;&nbsp;&nbsp;
                <i
                className={
                  `${
                    colorBlind ?
                    "bi bi-toggle-on settings" :
                    "bi  bi-toggle-off settings"
                    }`
                  }
                  onClick={changeColorBlind}
                >
                </i>
            </div>
          </div>
          <div className="modal-footer">
            <div>
              <span>
                  If you're having fun, you can support by buying me coffee 🤗
              </span>
            </div>
            <div>
                <a
                  href="https://www.buymeacoffee.com/PhiAgent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee"
                    className="buymeacoffee"
                  height="41" width="174"/>
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
