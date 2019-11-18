import React from "react";
import loadingGif from "../loading.gif";
import axios from "axios";

class BackgroundFormField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgrounds: ""
    };

    this.getBackgrounds = this.getBackgrounds.bind(this);
  }

  getBackgrounds() {
    if (this.state.backgrounds === "") {
      axios.get("https://api.open5e.com/backgrounds/").then((response) => {
        let backgroundsArray = [];
        response.data.results.forEach((element) => {
          backgroundsArray.push(element);
        });
        this.setState({
          backgrounds: backgroundsArray
        });
      });
    }
  }

  handleChange(element) {
    // console.log(element);
    this.props.onBackgroundChange(element);
  }

  createButtons() {
    let buttonArray = [];
    this.state.backgrounds.forEach((element) => {
      console.log("ELEMENT:" + element);
      let name = element.name;
      buttonArray.push(<button onClick={(name) => this.handleChange(name)}>{name}</button>);
    });
    return buttonArray;
  }

  render() {
    this.getBackgrounds();
    if (this.state.backgrounds === "" || this.props.playerBackground === null) {
      return <img alt="loading" src={loadingGif} />;
    } else {
      let buttonArray = this.createButtons();
      return (
        <div>
          {buttonArray}
          <p>{this.props.playerBackground.name}</p>
          <p>{this.props.playerBackground.desc}</p>
          <p>Additional skills: {this.props.playerBackground.skill_proficiencies}</p>
          <p>{this.props.playerBackground.tool_proficiencies}</p>
          <p>Languages: {this.props.playerBackground.languages}</p>
          <p>Additional equipment: {this.props.playerBackground.equipment}</p>
          <p>{this.props.playerBackground.feature}</p>
          <p>{this.props.playerBackground.feature_desc}</p>
        </div>
      );
    }
  }
}

export default BackgroundFormField;
