import React from "react";
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
    const assignedClasses = [];

    let btnClass = "";
    if (props.showPersons) {
        btnClass = styles.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(styles.red); //assignedClasses = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold); // assignedClasses = ['red', 'bold']
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>Zuckerberg loves you!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;
