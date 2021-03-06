import React, { Component } from "react";

import styles from "./Person.module.css";

class Person extends Component {
    render() {
        console.log("[Person.js] rendering...");

        return (
            <div className={styles.Person}>
                <p onClick={this.props.click}>
                    I am {this.props.name}. I was created {this.props.age} years ago.
                </p>
                <p>{this.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;
