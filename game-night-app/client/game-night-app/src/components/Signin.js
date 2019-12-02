import React from "react";
import axios from "axios";
import "./../styles/loginStyles/login.css";

function Login(props) {
  return (
    <form className="container--signin">
      <label>Name</label>
      <input placeholder="Name"></input>
      <label>Email</label>
      <input placeholder="Email"></input>
      <label>Password</label>
      <input placeholder="password"></input>
      <button className="btn--signin" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default Login;
