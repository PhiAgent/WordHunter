import React, { useState } from 'react';
import useMode from '../../context/GameContext';
import {scoreSheet} from '../../utils/scoreGenerator';

const Login = () => {

  const { setPlayer } = useMode();

  const [input, setInput] = useState('');
  const [errors, setErrors] = useState('');

  // Update Input form
  const handleChange = e => {
    setInput(e.target.value);
  }

  // Validates username
  const validate = () => {
    let noSpace = /^\S+$/g;
    let noSpecial = /^[a-zA-Z0-9]+$/g;

    if(input.length < 3) {//Too short
      setErrors('Nickname must be at least 3 characters');
      return false;

    } else if (input.length > 20) {//Too Long
      setErrors('Nickname must be at most 20 characters');
      return false;

    } else if (!(input[0].toUpperCase() in scoreSheet)) {//Does not start with letter
      setErrors('Nickname must start with letter');
      return false;

    } else if (!username) {//Nothing entered
      setErrors('Nickname must be at least 3 characters');
      return false;

    } else if (!noSpace.test(input)) {//Has spaces
      setErrors('Nickname must have no space');
      return false;
    }

    else if (!noSpecial.test(input)) {//Has special Characters
      setErrors('No special characters allowed');
      return false;
    }

    setErrors('');
    return true;
  };

  //Set helper messages
  const helperText = () => errors ? errors : `It does not have to be your email`;

  // Submits username
  const handleSubmit = e => {
    e.preventDefault();
    let noErrors = validate();

    if(noErrors) {
      const player = input;
      setPlayer(player);
      setInput('');
    }
  }

  return (
    <div className="container-fluid">
      <div className="login">
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="inputHelper">
              <input
                type="text"
                className="form-control username"
                id="username"
                name="username"
                aria-describedby="usernameHelp"
                placeholder="What is your nickname?"
                value={input}
                onChange={handleChange}
              />
              <small
                id="usernameHelp"
                className={`form-text text-muted ${errors ? "errors" : ""
                }`}>
                  {helperText()}
              </small>
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Enter</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;