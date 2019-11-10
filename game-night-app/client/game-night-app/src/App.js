import React from "react";
import logo from "./logo.svg";
import PlayerCharacter from "./components/PlayerCharacter.js";
import Form from "./components/FormComponent";
import CreateCharacterComponent from "./components/CreateCharacterComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <CreateCharacterComponent />
    </div>
  );
}

export default App;
