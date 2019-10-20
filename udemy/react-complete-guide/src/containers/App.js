import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps ", props);
        return state;
    }

    componentDidMount() {
        console.log("[App.js] componentDidMount");
    }

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
        console.log("[App.js] render");

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            <div className={styles.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                    title={this.props.appTitle}
                />
                {persons}
            </div>
        );
    }
}

export default App;
