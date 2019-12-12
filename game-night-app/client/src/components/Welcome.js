import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import "./../bootstrap.min.css";

function Welcome(props) {
  const [registerUser, setRegisterUser] = useState(false);

  function registerNewUser() {
    setRegisterUser(!registerUser);
  }

  switch (registerUser) {
    case true:
      return (
        <div>
          <h1>Register</h1>
          {/*Had an issue with mongoDB not having characters to load if I 
          immediately signed a new user in.  May be worth looking into later. */}
          <Signup userRegistered={registerNewUser} />
          <button className="btn btn-secondary" onClick={registerNewUser}>
            Login
          </button>
        </div>
      );

    case false:
      return (
        <div>
          <h1>Welcome</h1>
          <p>Please sign in or register new user.</p>
          <Signin />
          <button className="btn btn-secondary" onClick={registerNewUser}>
            Register
          </button>
        </div>
      );
  }
}

export default Welcome;
