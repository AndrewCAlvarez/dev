import React from "react";
import StatFormField from "./StatFormField";
const axios = require("axios");

class CreateCharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      class: "",
      race: ""
    };

    this.formFieldHandler = this.formFieldHandler.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.assignClass = this.assignClass.bind(this);
    this.assignRace = this.assignRace.bind(this);
  }

  sendForm(event) {
    if (this.state.name === "") {
      window.alert("Please enter a name.");
    } else {
      if (this.state.class === "") {
        axios.get("https://api.open5e.com/classes/").then((response) => {
          this.setState({
            class: response.data.results[0]
          });
          console.log(this.state.class);
        });
        axios
          .post("http://localhost:9000/playerCharacter", {
            name: this.state.name,
            class: this.state.class,
            race: this.state.race
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log(this.state.race);
        axios
          .post("http://localhost:9000/playerCharacter", {
            name: this.state.name,
            class: this.state.class,
            race: this.state.race
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        event.preventDefault();
        console.log("FORM SENT");
      }
    }
  }

  formFieldHandler(event) {
    let category = event.target.getAttribute("data-category");

    if (category === "name") {
      this.setState({
        name: event.target.value
      });
    } else if (category === "class") {
      this.assignClass(event.target.value);
    } else if (category === "race") {
      this.assignRace(event.target.value);
    } else if (category === "stat") {
    }
  }

  assignRace(playerRace) {
    if (playerRace === "Dwarf") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[0]
        });
      });
    } else if (playerRace === "Elf") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[1]
        });
      });
    } else if (playerRace === "Halfling") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[2]
        });
      });
    } else if (playerRace === "Human") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[3]
        });
      });
    } else if (playerRace === "Dragonborn") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[4]
        });
      });
    } else if (playerRace === "Gnome") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[5]
        });
      });
    } else if (playerRace === "Half-Elf") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[6]
        });
      });
    } else if (playerRace === "Half-Orc") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[7]
        });
      });
    } else if (playerRace === "Tiefling") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[8]
        });
      });
    }
  }

  assignClass(playerClass) {
    if (playerClass === "Barbarian") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[0]
        });
      });
    } else if (playerClass === "Bard") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[1]
        });
      });
    } else if (playerClass === "Cleric") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[2]
        });
      });
    } else if (playerClass === "Druid") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[3]
        });
      });
    } else if (playerClass === "Fighter") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[4]
        });
      });
    } else if (playerClass === "Monk") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[5]
        });
      });
    } else if (playerClass === "Paladin") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[6]
        });
      });
    } else if (playerClass === "Ranger") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[7]
        });
      });
    } else if (playerClass === "Rogue") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[8]
        });
      });
    } else if (playerClass === "Sorcerer") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[9]
        });
      });
    } else if (playerClass === "Warlock") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[10]
        });
      });
    } else if (playerClass === "Wizard") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[11]
        });
      });
    }
  }

  render() {
    //  If they have selected a spellcaster, then submit button is removed until spells are selected
    return (
      <div>
        <label>Name</label>
        <input data-category="name" placeholder="name" onChange={this.formFieldHandler}></input>
        <select data-category="class" name="class" onChange={this.formFieldHandler}>
          <option value="Barbarian">Barbarian</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Fighter">Fighter</option>
          <option value="Monk">Monk</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Rogue">Rogue</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Wizard">Wizard</option>
        </select>
        <StatFormField
          data-category="stat"
          onChange={this.formFieldHandler}
          placeholder="Strength"
        />
        <StatFormField
          data-category="stat"
          onChange={this.formFieldHandler}
          placeholder="Dexterity"
        />
        <StatFormField
          data-category="stat"
          onChange={this.formFieldHandler}
          placeholder="Constitution"
        />
        <StatFormField
          data-category="stat"
          onChange={this.formFieldHandler}
          placeholder="Intelligence"
        />
        <StatFormField data-category="stat" onChange={this.formFieldHandler} placeholder="Wisdom" />
        <StatFormField
          data-category="stat"
          onChange={this.formFieldHandler}
          placeholder="Charisma"
        />
        <label>Race</label>
        <select data-category="race" name="race" onChange={this.formFieldHandler}>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Halfling">Halfling</option>
          <option value="Human">Human</option>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-Elf">Half-Elf</option>
          <option value="Half-Orc">Half-Orc</option>
          <option value="Tiefling">Tiefling</option>
        </select>
        <input type="submit" value="Send" onClick={this.sendForm}></input>
      </div>
    );
  }
}

export default CreateCharacterForm;
