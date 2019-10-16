import React from "react";

const person = (props) => {
    return (
        <div>
            <p>
                I am {props.name}. I was created {props.age} years ago.
            </p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;
