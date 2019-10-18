import React from "react";

const userOutput = (props) => {
    const style = {
        backgroundColor: "dodgerblue",
        color: "white",
        width: "60%",
        margin: "16px auto",
        padding: "16px"
    };

    console.log(props.username);
    return (
        <div className="UserOutput" style={style}>
            <p>{props.username}</p>
            <p>This is some paragraph text.</p>
        </div>
    );
};

export default userOutput;
