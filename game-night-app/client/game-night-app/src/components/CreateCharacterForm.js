import React from "react";
import StatFormField from "./StatFormField";
import ProficiencyFormField from "./ProficiencyFormField";
import BackgroundFormField from "./BackgroundFormField";
import loadingGif from "../loading.gif";
const axios = require("axios");

class CreateCharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      class: "",
      proficiencies: [],
      abilityScores: {},
      race: "",
      experience: 0,
      background: null,
      alignment: "",
      physicalCharacteristics: "",
      items: "",
      spells: ""
    };

    this.formFieldHandler = this.formFieldHandler.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.assignClass = this.assignClass.bind(this);
    this.assignRace = this.assignRace.bind(this);
    this.assignProficiencies = this.assignProficiencies.bind(this);
    this.assignBackground = this.assignBackground.bind(this);
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
      //  Start by resetting the proficiencies
      this.setState({
        proficiencies: []
      });
      this.assignClass(event.target.value);
    } else if (category === "race") {
      this.assignRace(event.target.value);
    } else if (category === "stat") {
    }
  }

  assignRace(playerRace) {
    //  Set default to dwarf
    if (this.state.race === "") {
      axios.get("https://api.open5e.com/races/").then((response) => {
        this.setState({
          race: response.data.results[0]
        });
      });
    }
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
    //  Set default to barbarian
    if (this.state.class === "") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[0]
        });
      });
    }
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

  assignProficiencies(playerProficiencies, isChecked) {
    let profs = this.state.proficiencies;
    let isDuplicate = false;
    profs.forEach((element, index) => {
      if (element === playerProficiencies) {
        isDuplicate = true;
        profs.splice(index, index + 1);
      }
    });
    if (!isDuplicate) {
      profs.push(playerProficiencies);
      this.setState({
        proficiencies: profs
      });
    } else {
      this.setState({
        proficiencies: profs
      });
    }
    console.log(this.state.proficiencies);
  }

  assignBackground(newBackground) {
    console.log(newBackground);
    //  Set default background
    if (this.state.background === null) {
      axios.get("https://api.open5e.com/backgrounds/").then((response) => {
        this.setState({
          background: response.data.results[0]
        });
      });
    }
  }

  render() {
    this.assignClass();
    this.assignRace();
    this.assignBackground();
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
        <ProficiencyFormField
          classProfs={this.state.class.prof_skills}
          playerClass={this.state.class}
          onProfChange={this.assignProficiencies}
          proficiencies={this.state.proficiencies}
        />
        <div>
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
          <StatFormField
            data-category="stat"
            onChange={this.formFieldHandler}
            placeholder="Wisdom"
          />
          <StatFormField
            data-category="stat"
            onChange={this.formFieldHandler}
            placeholder="Charisma"
          />
        </div>
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
        <BackgroundFormField
          playerBackground={this.state.background}
          onBackgroundChange={this.assignBackground}
        />
        <input type="submit" value="Send" onClick={this.sendForm}></input>
      </div>
    );
  }
}

export default CreateCharacterForm;
