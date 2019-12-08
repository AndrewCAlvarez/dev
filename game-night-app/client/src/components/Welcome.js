import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import axios from "axios";

import "./../bootstrap.min.css";

function Welcome(props) {
  const [registerUser, setRegisterUser] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function registerNewUser() {
    setRegisterUser(!registerUser);
  }

  function handleLogin() {
    props.handleLogin();
  }

  if (!registerUser) {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Please sign in or register new user.</p>
        <Signin handleLogin={handleLogin} />
        <button className="btn btn-secondary" onClick={registerNewUser}>
          Register
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Register</h1>
        <Signup userLoggedIn={handleLogin} />
        <button className="btn btn-secondary" onClick={registerNewUser}>
          Login
        </button>
      </div>
    );
  }
}

export default Welcome;
