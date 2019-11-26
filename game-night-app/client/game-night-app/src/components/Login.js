import React from "react";
import styles from "./../styles/loginStyles/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <label>Username</label>
        <input type="text" placeholder="username"></input>
        <label>Password</label>
        <input type="text" placeholder="password"></input>
      </div>
    );
  }
}

export default Login;
