import React from "react";
import axios from "axios";

function Signin(props) {
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:9000/signin",
        {
          username: e.target.username.value,
          password: e.target.password.value
        },
        { withCredentials: true }
      )
      .then(function(response) {
        console.log(response);
        props.handleLogin();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group container--signin">
        <label>Username</label>
        <input
          name="username"
          type="text"
          className="form-control"
          id="inputUsername"
          aria-describedby="usernameHelp"
          placeholder="Enter username"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign In
      </button>
    </form>
  );
}

export default Signin;
