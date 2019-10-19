import React, { Component } from "react";
import styles from "./App.module.css";
import Person from "./components/Person/Person";

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
            backgroundColor: "dodgerblue",
            color: "white",
            font: "inherit",
            border: "none",
            padding: "8px",
            cursor: "pointer",
            outline: "none",
            ":hover": {
                backgroundColor: "lightblue"
            }
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

            style.backgroundColor = "red";
            style[":hover"] = {
                backgroundColor: "salmon"
            };
        }

        const assignedClasses = [];

        if (this.state.persons.length <= 2) {
            assignedClasses.push(styles.red); //assignedClasses = ['red']
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(styles.bold); // assignedClasses = ['red', 'bold']
        }

        return (
            <div className={styles.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(" ")}>Zuckerberg loves you!</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
