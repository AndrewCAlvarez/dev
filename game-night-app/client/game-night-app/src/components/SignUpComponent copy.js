import React from "react";
import axios from "axios";
import "./../styles/loginStyles/login.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      uPlaceholder: "username",
      pPlaceholder: "password"
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  //  need to send user id up in state for use
  //  userid is contained in the response from the server
  handleLogin(props) {
    axios
      .post("http://localhost:9000/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        if (response.data === "OK") {
          this.props.onLoginSuccess(true);
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  handleChange(e) {
    let category = e.target.name;
    let value = e.target.value;
    if (category === "username") {
      this.setState({
        username: value
      });
    }
    if (category === "password") {
      this.setState({
        password: value
      });
    }
  }

  render() {
    return (
      <div className="container--login">
        <div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder={this.state.uPlaceholder}
              onChange={(e) => this.handleChange(e)}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder={this.state.pPlaceholder}
              onChange={(e) => this.handleChange(e)}
            ></input>
          </div>
          <button className="btn--login" type="submit" onClick={this.handleLogin}>
            Create Account
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
