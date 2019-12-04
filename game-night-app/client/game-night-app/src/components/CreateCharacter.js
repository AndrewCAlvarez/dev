import React from "react";
import StatFormField from "./StatFormField";
import ProficiencyFormField from "./ProficiencyFormField";
import BackgroundFormField from "./BackgroundFormField";
import TextComponent from "./TextComponent";
import "../bootstrap.min.css";
import "./../styles/createCharacterFormStyles/createCharacterForm.css";
import axios from "axios";

class CreateCharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      class: "",
      race: "",
      proficiencies: [],
      stats: {
        strength: 8,
        constitution: 8,
        dexterity: 8,
        intelligence: 8,
        wisdom: 8,
        charisma: 8
      },
      experience: 0,
      background: null,
      alignment: "lawful good",
      about: "",
      items: "",
      spells: "",
      isCaster: false
    };

    this.formFieldHandler = this.formFieldHandler.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.assignClass = this.assignClass.bind(this);
    this.assignRace = this.assignRace.bind(this);
    this.assignProficiencies = this.assignProficiencies.bind(this);
    this.assignStats = this.assignStats.bind(this);
    this.assignBackground = this.assignBackground.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    this.handleAboutChange = this.handleAboutChange.bind(this);
  }

  sendForm(event) {
    if (this.state.name === "") {
      window.alert("Please enter a name.");
    } else {
      axios
        .post("http://localhost:9000/playerCharacter", {
          name: this.state.name,
          class: this.state.class,
          race: this.state.race,
          proficiencies: this.state.proficiencies,
          stats: this.state.stats,
          background: this.state.background,
          alignment: this.state.alignment,
          about: this.state.about
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

  assignProficiencies(playerProficiency) {
    let profs = this.state.proficiencies;
    let duplicate = false;
    profs.forEach((element, index) => {
      //  check if proficiency is duplicate and remove from array
      if (element === playerProficiency) {
        duplicate = true;
        profs.splice(index);
      }
    });
    if (!duplicate) {
      profs.push(playerProficiency);
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

  assignStats(name, e) {
    let stats = this.state.stats;
    if (name === "strength") {
      stats.strength = e.target.value;
    } else if (name === "constitution") {
      stats.constitution = e.target.value;
    } else if (name === "dexterity") {
      stats.dexterity = e.target.value;
    } else if (name === "intelligence") {
      stats.intelligence = e.target.value;
    } else if (name === "wisdom") {
      stats.wisdom = e.target.value;
    } else if (name === "charisma") {
      stats.charisma = e.target.value;
      console.log(this.state.stats);
    }
  }

  handleBackgroundChange(newBackground) {
    this.setState({
      background: newBackground
    });
  }

  handleAboutChange(newText) {
    this.setState({
      about: newText
    });
  }

  render() {
    this.assignClass();
    this.assignRace();
    this.assignBackground();
    //  If they have selected a spellcaster, then submit button is removed until spells are selected
    return (
      <div>
        <div className="container container--name">
          <label>Name</label>
          <input data-category="name" placeholder="name" onChange={this.formFieldHandler}></input>
        </div>
        <div className="container container--class">
          <label>Class</label>
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
        </div>
        <div className="container container--race">
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
        </div>
        <div className="container container--stats">
          <label>Ability Scores</label>
          <StatFormField
            data-category="stat"
            onStatChange={this.assignStats}
            placeholder="Strength"
          />
          <StatFormField
            data-category="stat"
            onStatChange={this.assignStats}
            placeholder="Dexterity"
          />
          <StatFormField
            data-category="stat"
            onStatChange={this.assignStats}
            placeholder="Constitution"
          />
          <StatFormField
            data-category="stat"
            onStatChange={this.assignStats}
            placeholder="Intelligence"
          />
          <StatFormField
            data-category="stat"
            onStatChange={this.assignStats}
            placeholder="Wisdom"
          />
          <StatFormField
            data-category="stat"
            onStatChange={this.assignStats}
            placeholder="Charisma"
          />
        </div>
        <div className="container container--profs">
          <label>Proficiencies</label>
          <ProficiencyFormField
            classProfs={this.state.class.prof_skills}
            playerClass={this.state.class}
            onProfChange={this.assignProficiencies}
            proficiencies={this.state.proficiencies}
          />
        </div>
        <div className="container container--background">
          <BackgroundFormField
            playerBackground={this.state.background}
            onBackgroundChange={this.handleBackgroundChange}
          />
        </div>
        <div className="container container--alignment">
          <select data-category="alignment" name="alignment" onChange={this.formFieldHandler}>
            <option value="lawfulGood">Lawful Good</option>
            <option value="neutralGood">Neutral Good</option>
            <option value="chaoticGood">Chaotic Good</option>
            <option value="lawfulNeutral">Lawful Neutral</option>
            <option value="neutral">Neutral</option>
            <option value="chaoticNeutral">Chaotic Neutral</option>
            <option value="lawfulEvil">Lawful Evil</option>
            <option value="neutralEvil">Neutral Evil</option>
            <option value="chaoticEvil">Chaotic Evil</option>
          </select>
        </div>
        <div className="container container--about">
          <label>{"About " + this.state.name}</label>
          <TextComponent text={this.state.about} onTextChange={this.handleAboutChange} />
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          value={"Create " + this.state.name}
          onClick={this.sendForm}
        ></input>
      </div>
    );
  }
}

export default CreateCharacterForm;
