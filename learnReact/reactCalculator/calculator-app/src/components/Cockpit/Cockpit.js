import React from "react";
import Display from "../Display/Display";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import Toggle from "../Toggle/Toggle";
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
  console.log(props.toggled);
  return (
    <div className={styles.Cockpit}>
      <h5>{props.toggled}</h5>
      <Toggle toggled={props.toggled} />
      <Display value={props.displayValue} />
      <ButtonContainer buttons={props.buttons} />
    </div>
  );
};

export default cockpit;
