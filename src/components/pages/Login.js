import React, { useState } from 'react';
import ReactCountryDropdown from 'react-country-dropdown';
import useMode from '../../context/GameContext';
import {scoreSheet} from '../../utils/scoreGenerator';
import {defaultCountry} from '../../utils/constants';

const Login = () => {

  const { setPlayer, setCountry, country } = useMode();

  const [input, setInput] = useState('');
  const [usernameErrors, setUsernameErrors] = useState('');

  const noSpace = /^\S+$/g;
  const noSpecial = /^[a-zA-Z0-9]+$/g;

  // Update Input form
  const handleChange = e => {
    setInput(e.target.value);
  }

  // ValidateUsernames username
  const validateUsername = () => {

    if(input.length < 3) {//Too short
      setUsernameErrors('Nickname must be at least 3 characters');
      return false;

    } else if (input.length > 20) {//Too Long
      setUsernameErrors('Nickname must be at most 20 characters');
      return false;

    } else if (!(input[0].toUpperCase() in scoreSheet)) {//Does not start with letter
      setUsernameErrors('Nickname must start with letter');
      return false;

    } else if (!username) {//Nothing entered
      setUsernameErrors('Nickname must be at least 3 characters');
      return false;

    } else if (!noSpace.test(input)) {//Has spaces
      setUsernameErrors('Nickname must have no space');
      return false;
    }

    else if (!noSpecial.test(input)) {//Has special Characters
      setUsernameErrors('No special characters allowed');
      return false;
    }

    setUsernameErrors('');
    return true;
  };

  //Set helper messages
  const helperTextUsername = () => usernameErrors ? usernameErrors : `It does not have to be your email`;
  const helperTextCountry = () => `What country are you rooting for this world cup?`;

  const handleCountryChange = country => {
      setCountry(country.name);
  }

  // Submits username
  const handleSubmit = e => {
    e.preventDefault();
    let noUsernameErrors = validateUsername();
    console.log("Country: "+ country);


    if(noUsernameErrors && country) {
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
              <div
                className={`form-text helper-text text-muted ${usernameErrors ? "errors" : ""
                }`}>
                  {helperTextUsername()}
              </div>
            </div>
            <div className="inputHelper country-subForm">
                <ReactCountryDropdown
                defaultCountry='GH'
                onSelect={handleCountryChange}
                />
                <div
                className={`form-text text-muted helper-text`}>
                  {helperTextCountry()}
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Enter</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;