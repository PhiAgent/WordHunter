import React, { useState } from 'react';

const initialValues = {
  username: '',
}

const Login = () => {

  return (
    <div className='container'>
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
  )
}

export default Login;