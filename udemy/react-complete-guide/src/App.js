import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
    state = {
        persons: [
            { id: "fasdf23f2", name: "Borg", age: 34 },
            { id: "2342kj4h", name: "Gerg", age: 19 },
            { id: "314oji4", name: "Ving", age: 5 }
        ],
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        //... spread operator makes a new copy of the array
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid dodgerblue",
            padding: "8px",
            cursor: "pointer"
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        );
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>This is me again.</h1>
                <p>This is paragraph text.</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
        //This is basically what render does
        // return React.createElement(
        //     "div",
        //     null,
        //     React.createElement("h1", { className: "App" }, "Do it.")
        // );
    }
}

export default App;
