import React from "react";
import styles from "./../styles/loginStyles/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      uPlaceholder: "username",
      pPlaceholder: "password"
    };
  }

  render() {
    return (
      <div className="container--login">
        <div>
          <div>
            <label>Username</label>
            <input type="text" name="username" placeholder={this.state.uPlaceholder}></input>
          </div>
          <div>
            <label>Password</label>
            <input type="text" placeholder={this.state.pPlaceholder}></input>
          </div>
          <button className="btn--login" type="submit">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
