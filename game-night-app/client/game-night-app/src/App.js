import React from "react";
// import PlayerCharacter from "./components/PlayerCharacter.js";
// import Form from "./components/FormComponent";
import CreateCharacterForm from "./components/CreateCharacterForm";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <CreateCharacterForm /> */}
    </div>
  );
}

export default App;
