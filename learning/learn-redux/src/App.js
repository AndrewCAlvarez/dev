import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Click from "./components/Click";

function App() {
  return (
    <div className="App">
      <Click />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
