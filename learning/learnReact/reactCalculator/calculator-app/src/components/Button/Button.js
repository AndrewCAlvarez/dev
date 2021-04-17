import React from "react";
import styles from "./Button.module.css";

const button = (props) => {
  return <button className={styles.Button}>{props.value}</button>;
};

export default button;
