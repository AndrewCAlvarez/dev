import React from "react";

const userInput = (props) => {
    // UserInput should hold an input element

    const style = {
        border: "1px solid black"
    };

    return (
        //stuff goes here
        <input
            type="text"
            className="UserInput"
            placeholder={props.username}
            onChange={props.changed}
            style={style}
        />
    );
};

export default userInput;
