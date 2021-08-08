import React, { Component } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import styles from "./ButtonContainer.module.css";

class ButtonContainer extends Component {
  render() {
    return this.props.buttons.map((button, index) => {
      return <Button value={button} />;
    });
  }
}

export default ButtonContainer;
