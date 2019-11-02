import React from "react";

var toggle = (props) => {
  var text = "nothing";
  const handleClick = (props) => {
    text = "Something";
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default toggle;
