import React, { Component } from "react";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import "./App.css";

class App extends Component {
    state = {
        persons: [{ name: "Borg", age: 34 }, { name: "Gerg", age: 19 }, { name: "Ving", age: 5 }]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: "Borg", age: 34 },
                { name: "Guga", age: 27 },
                { name: "Ving", age: 5 }
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: "Borg", age: 34 },
                { name: event.target.value, age: 27 },
                { name: "Ving", age: 5 }
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid dodgerblue",
            padding: "8px",
            cursor: "pointer"
        };

        return (
            <div className="App">
                <h1>This is me again.</h1>
                <p>This is paragraph text.</p>
                <button style={style} onClick={() => this.switchNameHandler("Hamon")}>
                    Switch Name
                </button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Julia")}
                    changed={this.nameChangedHandler}
                >
                    My Hobbies: Extermination
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                <UserInput />
                <UserOutput />
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
