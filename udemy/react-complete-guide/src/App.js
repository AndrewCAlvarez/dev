import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
    state = {
        persons: [{ name: "Rob", age: 34 }, { name: "Ben", age: 19 }, { name: "Vin", age: 5 }]
    };

    render() {
        return (
            <div className="App">
                <h1>This is me again.</h1>
                <p>This is paragraph text.</p>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
                    My Hobbies: Racing
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
        // return React.createElement(
        //     "div",
        //     null,
        //     React.createElement("h1", { className: "App" }, "Do it.")
        // );
    }
}

export default App;
