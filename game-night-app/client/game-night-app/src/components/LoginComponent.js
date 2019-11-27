import React from "react";
import axios from "axios";
import styles from "./../styles/loginStyles/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      uPlaceholder: "username",
      pPlaceholder: "password",
      response: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //  need to send user id up in state for use
  //  userid is contained in the response from the server
  handleSubmit(props) {
    console.log(this.state.username + " " + this.state.password);
    axios
      .post("http://localhost:9000/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(function(response) {
        // props.onUpdateId(res.session);
        console.log(response.passport);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    console.log("Submitted");
  }

  handleChange(e) {
    if (e.target.name === "username") {
      this.setState({
        username: e.target.value
      });
    }
    if (e.target.name === "password") {
      this.setState({
        password: e.target.value
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
          <button className="btn--login" type="submit" onClick={this.handleSubmit}>
            Login
          </button>
        </div>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default Login;
