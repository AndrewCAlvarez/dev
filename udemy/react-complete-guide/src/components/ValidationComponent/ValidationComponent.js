import React from "react";

const validationComponent = (props) => {
    if (props.textLength < 5) {
        return <p>Text too short!</p>;
    } else {
        return null;
    }
};

export default validationComponent;
