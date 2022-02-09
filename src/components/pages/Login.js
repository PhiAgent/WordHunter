import React, { useState } from 'react';
import useMode from '../../context/GameContext';

const initialValues = {
  username: '',
}

const Login = () => {
  const { lightMode, changeMode, changeColorBlind, colorBlind } = useMode();

  return (
    <div className={`container ${lightMode ? "dark" : ""} ${colorBlind ? "color-blind" : ""}`}>
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control username"
              id="username"
              name="username"
              aria-describedby="usernameHelp"
              placeholder="What is your username?"
            />
            <small id="usernameHelp" className="form-text text-muted">It doesn't have to be your email</small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;