import React from "react";

function createOption(num) {
  let i = 0;
  let e = [];
  for (i = 1; i < num; i++) {
    e.push(React.createElement("option", null, i));
  }
  return e;
}

function StatFormField(props) {
  return (
    <div>
      <label value={props.placeholder}>{props.placeholder}</label>
      <select>{createOption(21)}</select>
    </div>
  );
}

export default StatFormField;
