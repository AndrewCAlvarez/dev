import React from "react";

const charComponent = (props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid dodgerblue"
    };

    return (
        <p style={style} onClick={props.click}>
            {props.value}
        </p>
    );
};

export default charComponent;
