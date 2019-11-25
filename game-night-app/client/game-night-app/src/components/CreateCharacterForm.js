import React from "react";
import StatFormField from "./StatFormField";
import ProficiencyFormField from "./ProficiencyFormField";
import BackgroundFormField from "./BackgroundFormField";
import TextComponent from "./TextComponent";
import loadingGif from "../loading.gif";
import bootstrap from "../bootstrap.min.css";
import CreateCharacterFormStyles from "./../styles/createCharacterForm.css";
const axios = require("axios");

/*
  To-dos:
  - add stats values to state
  - spells
  - items
  - send form data to mongodb
  - login with OAuth
  - social login
  - socket.io so multiple people can see eachother's cards and exchange information.

*/
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
      alignment: "lawful good",
      physicalCharacteristics: "",
      items: "",
      spells: "",
      isCaster: false
    };

    this.formFieldHandler = this.formFieldHandler.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.assignClass = this.assignClass.bind(this);
    this.assignRace = this.assignRace.bind(this);
    this.assignProficiencies = this.assignProficiencies.bind(this);
    this.assignBackground = this.assignBackground.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    this.handlePhysicalCharacteristicsChange = this.handlePhysicalCharacteristicsChange.bind(this);
  }

  sendForm(event) {
    if (this.state.name === "") {
      window.alert("Please enter a name.");
    } else {
      console.log(this.state.race);
      axios
        .post("http://localhost:9000/playerCharacter", {
          name: this.state.name,
          class: this.state.class,
          race: this.state.race,
          proficiencies: this.state.proficiencies,
          abilityScores: this.state.abilityScores,
          race: this.state.race,
          experience: 0,
          background: this.state.background,
          alignment: this.state.alignment,
          physicalCharacteristics: this.state.physicalCharacteristics,
          items: this.state.items,
          spells: this.state.spells,
          isCaster: false
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
    } else if (category === "alignment") {
      this.setState({
        alignment: event.target.value
      });
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
          class: response.data.results[0],
          isCaster: false
        });
      });
    } else if (playerClass === "Bard") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[1],
          isCaster: true
        });
      });
    } else if (playerClass === "Cleric") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[2],
          isCaster: true
        });
      });
    } else if (playerClass === "Druid") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[3],
          isCaster: true
        });
      });
    } else if (playerClass === "Fighter") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[4],
          isCaster: false
        });
      });
    } else if (playerClass === "Monk") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[5],
          isCaster: false
        });
      });
    } else if (playerClass === "Paladin") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[6],
          isCaster: true
        });
      });
    } else if (playerClass === "Ranger") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[7],
          isCaster: true
        });
      });
    } else if (playerClass === "Rogue") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[8],
          isCaster: false
        });
      });
    } else if (playerClass === "Sorcerer") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[9],
          isCaster: true
        });
      });
    } else if (playerClass === "Warlock") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[10],
          isCaster: true
        });
      });
    } else if (playerClass === "Wizard") {
      axios.get("https://api.open5e.com/classes/").then((response) => {
        this.setState({
          class: response.data.results[11],
          isCaster: true
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

  assignBackground() {
    //  Set default background
    if (this.state.background === null) {
      axios.get("https://api.open5e.com/backgrounds/").then((response) => {
        this.setState({
          background: response.data.results[0]
        });
      });
    }
  }

  handleBackgroundChange(newBackground) {
    this.setState({
      background: newBackground
    });
  }

  handlePhysicalCharacteristicsChange(newText) {
    this.setState({
      physicalCharacteristics: newText
    });
  }

  render() {
    this.assignClass();
    this.assignRace();
    this.assignBackground();
    //  If they have selected a spellcaster, then submit button is removed until spells are selected
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">
            Game Night
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
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

        <div className="test--container">
          <ProficiencyFormField
            classProfs={this.state.class.prof_skills}
            playerClass={this.state.class}
            onProfChange={this.assignProficiencies}
            proficiencies={this.state.proficiencies}
          />

          <div className="stats--container">
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
          onBackgroundChange={this.handleBackgroundChange}
        />
        <select data-category="alignment" name="alignment" onChange={this.formFieldHandler}>
          <option value="lawfulGood">lawfulGood</option>
          <option value="neutralGood">neutralGood</option>
          <option value="chaoticGood">chaoticGood</option>
          <option value="lawfulNeutral">lawfulNeutral</option>
          <option value="neutral">neutral</option>
          <option value="chaoticNeutral">chaoticNeutral</option>
          <option value="lawfulEvil">lawfulEvil</option>
          <option value="neutralEvil">neutralEvil</option>
          <option value="chaoticEvil">chaoticEvil</option>
        </select>
        <TextComponent
          text={this.state.physicalCharacteristics}
          onTextChange={this.handlePhysicalCharacteristicsChange}
        />
        <input type="submit" value="Send" onClick={this.sendForm}></input>
      </div>
    );
  }
}

export default CreateCharacterForm;
