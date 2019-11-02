import React, { Component } from "react";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import Cockpit from "./components/Cockpit/Cockpit";

import "./App.css";

class App extends Component {
  state = {
    buttons: ["AC", "+/-", "%", "/", "X", "-", "+", "=", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    displayValue: 0,
    toggled: false
  };

  render() {
    return (
      <div className="App">
        <h1>React Calculator</h1>
        <Cockpit
          toggled={this.state.toggled}
          buttons={this.state.buttons}
          displayValue={this.state.displayValue}
        />
      </div>
    );
  }
}

export default App;
