import React from "react";
const axios = require("axios");

class CreateCharacterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.formFieldHandler = this.formFieldHandler.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(event) {
    axios
      .post("http://localhost:9000/playerCharacter", {
        name: this.state.name
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    event.preventDefault();
  }

  formFieldHandler(event) {
    this.setState({
      name: event.target.value
    });
    console.log(this.state.name);
  }

  render() {
    return (
      <div onSubmit={this.sendForm}>
        <label>Name</label>
        <input placeholder="name" onChange={this.formFieldHandler}></input>

        <input type="submit" value="Send"></input>
      </div>
    );
  }
}

export default CreateCharacterComponent;
