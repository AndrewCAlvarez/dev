import React from "react";
import logo from "./logo.svg";
import Card from "./components/CardComponent.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Card />
    </div>
  );
}

export default App;
