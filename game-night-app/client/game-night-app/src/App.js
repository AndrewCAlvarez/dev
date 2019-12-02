import React from "react";
import CreateCharacterForm from "./components/CreateCharacterForm";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import CharacterSelect from "./components/CharacterSelectComponent";
import Signup from "./components/SignUpComponent";
import CharacterSheet from "./components/CharacterSheetComponent";
import Welcome from "./components/Welcome";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: true, //change this when working on user accounts
      currentPage: "signup"
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
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

  handleNavigation(page) {
    this.setState({
      currentPage: ""
    });
  }

  render() {
    let currentPage = this.state.currentPage;

    if (this.state.loggedIn === false) {
      return (
        <div className="App">
          <Navbar />
          <Signin onLoginSuccess={this.handleLogin} newMember={this.handleSignup} />
        </div>
      );
    } else if (currentPage === "welcome") {
      return (
        <div className="App">
          <Navbar />
          <Welcome />
        </div>
      );
    } else if (currentPage === "characterCreation") {
      return (
        <div>
          <Navbar onNavigate={this.handleNavigation} />
          <CreateCharacterForm />
        </div>
      );
    } else if (currentPage === "signin") {
      return (
        <div>
          <Navbar onNavigate={this.handleNavigation} />
          <Signin />
        </div>
      );
    } else if (currentPage === "signup") {
      return (
        <div>
          <Navbar onNavigate={this.handleNavigation} />
          <Signup />
        </div>
      );
    } else if (currentPage === "characterSelect") {
      return (
        <div>
          <Navbar onNavigate={this.handleNavigation} />
          {/* <CharacterSelect /> */}
          {/* <Counter /> */}
          <CharacterSheet />
        </div>
      );
    }
  }
}

export default App;
