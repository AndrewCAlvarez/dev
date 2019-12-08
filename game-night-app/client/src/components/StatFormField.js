import React from "react";

function createOption(num) {
  let i = 0;
  let e = [];
  for (i = 8; i < num; i++) {
    e.push(<option>{i}</option>);
  }
  return e;
}

function changeStat(props, e) {
  let name = props.placeholder.toLowerCase();
  props.onStatChange(name, e);
}

function StatFormField(props) {
  return (
    <div>
      <label value={props.placeholder}>{props.placeholder}</label>
      <select onChange={(e) => changeStat(props, e)}>{createOption(21)}</select>
    </div>
  );
}

export default StatFormField;
