import React from "react";
// import axios from "axios";
// import PlayerCharacter from "./components/PlayerCharacter.js";
// import Form from "./components/FormComponent";
import CreateCharacterForm from "./components/CreateCharacterForm";
import Login from "./components/LoginComponent";
import Navbar from "./components/Navbar";
import CharacterSelect from "./components/CharacterSelectComponent";
import Signup from "./components/SignUpComponent copy";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: true, //change this when working on user accounts
      currentPage: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  }

  handlePageTransition(e) {
    this.setState({
      currentPage: e.target.name
    });
  }

  render() {
    let currentPage = this.state.currentPage;

    if (this.state.loggedIn === false) {
      return (
        <div className="App">
          <Navbar />
          <Login onLoginSuccess={this.handleLogin} newMember={this.handleSignup} />
        </div>
      );
    } else if (currentPage === "") {
      return (
        <div className="App">
          <Navbar />
          <button name="login" onClick={(e) => this.handlePageTransition(e)}>
            Login
          </button>
          <button name="signup" onClick={(e) => this.handlePageTransition(e)}>
            Signup
          </button>
          <button name="characterCreation" onClick={(e) => this.handlePageTransition(e)}>
            Create New Character
          </button>
          <button name="characterSelect" onClick={(e) => this.handlePageTransition(e)}>
            Select Character
          </button>
        </div>
      );
    } else if (currentPage === "characterCreation") {
      return (
        <div>
          <Navbar />
          <CreateCharacterForm />
        </div>
      );
    } else if (currentPage === "login") {
      return (
        <div>
          <Navbar />
          <Login />
        </div>
      );
    } else if (currentPage === "signup") {
      return (
        <div>
          <Navbar />
          <Signup />
        </div>
      );
    } else if (currentPage === "characterSelect") {
      return (
        <div>
          <Navbar />
          <CharacterSelect />
        </div>
      );
    }
  }
}

export default App;
