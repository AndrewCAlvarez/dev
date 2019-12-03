import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

import "./../bootstrap.min.css";

function Welcome(props) {
  const [registerUser, setRegisterUser] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function registerNewUser() {
    console.log(registerUser);
    setRegisterUser(!registerUser);
  }

  function handleLogin(loggedIn) {
    console.log(loggedIn);
    props.userLoggedIn(loggedIn);
  }

  if (!registerUser) {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Please sign in or register new user.</p>
        <Signin userLoggedIn={handleLogin} />
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
