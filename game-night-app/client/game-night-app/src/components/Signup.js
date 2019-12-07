import React from "react";
import axios from "axios";

function Signup(props) {
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://134.209.163.182:9000/signup", {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group container--signup">
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
      <div className="form-group container--signup">
        <label htmlFor="inputEmail">Email address</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        ></input>
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
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
        Sign up!
      </button>
    </form>
  );
}

export default Signup;
