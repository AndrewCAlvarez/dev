import React from "react";
import Display from "../Display/Display";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
  return (
    <div className={styles.Cockpit}>
      <Display />
      <ButtonContainer buttons={props.buttons} />
    </div>
  );
};

export default cockpit;
