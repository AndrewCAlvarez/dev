import React from "react";
// import PlayerCharacter from "./components/PlayerCharacter.js";
// import Form from "./components/FormComponent";
import CreateCharacterForm from "./components/CreateCharacterForm";
import Login from "./components/LoginComponent";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null
    };

    this.state.handleUserIdChange = this.handleUserIdChange.bind(this);
  }

  handleUserIdChange(userId) {
    this.setState({
      userId: userId
    });
  }

  render() {
    if (this.state.userId === null) {
      return (
        <div className="App">
          <Navbar />
          <Login onUpdateId={(userId) => this.handleUserIdChange(userId)} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar />

          <CreateCharacterForm />
        </div>
      );
    }
  }
}

export default App;
