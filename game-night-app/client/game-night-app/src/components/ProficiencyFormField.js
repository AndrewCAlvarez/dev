import React from "react";
import loadingGif from "./loading.gif";

class ProficiencyFormField extends React.Component {
  constructor(props) {
    super(props);
  }

  searchStr(str, skillsArray, playerClass) {
    let availableSkillsArr = [];
    skillsArray.forEach((element, index) => {
      let strLen = element.length;
      let strStart = str.search(element);
      if (strStart === -1) {
      } else {
        availableSkillsArr.push(str.substr(strStart, strLen));
      }
    });
    if (playerClass.name === "Bard") {
      return skillsArray;
    } else {
      return availableSkillsArr;
    }
  }

  handleChange(element, e) {
    this.props.onProfChange(element);
  }

  render() {
    if (this.props.classProfs === undefined || this.props.playerClass === undefined) {
      return <img alt="Loading" src={loadingGif} />;
    } else {
      var profSkills = [
        "Acrobatics",
        "Animal Handling",
        "Arcana",
        "Athletics",
        "Deception",
        "Endurance",
        "History",
        "Insight",
        "Intimidation",
        "Investigation",
        "Medicine",
        "Nature",
        "Perception",
        "Performance",
        "Persuasion",
        "Religion",
        "Sleight of Hand",
        "Stealth",
        "Survival"
      ];

      let availableSkills = this.searchStr(
        this.props.classProfs,
        profSkills,
        this.props.playerClass
      );
      let renderItems = [];

      if (this.props.proficiencies.length > 3) {
        availableSkills.forEach((element, index) => {
          if (index === 0) {
            renderItems.push(
              <div key={"proficiency" + index} className="prof--item">
                <p>Please select fewer proficiencies.</p>
                <label>{element}</label>
                <input type="checkbox" onChange={(e) => this.handleChange(element, e)} />
              </div>
            );
          } else {
            renderItems.push(
              <div key={"proficiency" + index} className="prof--item">
                <label>{element}</label>
                <input type="checkbox" onChange={(e) => this.handleChange(element, e)} />
              </div>
            );
          }
        });
      } else if (this.props.proficiencies.length === 0) {
        availableSkills.forEach((element, index) => {
          renderItems.push(
            <div key={"proficiency" + index} className="prof--item">
              <label>{element}</label>
              <input
                type="checkbox"
                checked={false}
                onChange={(e) => this.handleChange(element, e)}
              />
            </div>
          );
        });
      } else {
        availableSkills.forEach((element, index) => {
          renderItems.push(
            <div key={"proficiency" + index} className="prof--item">
              <label>{element}</label>
              <input type="checkbox" onChange={(e) => this.handleChange(element, e)} />
            </div>
          );
        });
      }
      return (
        <div className="prof--container">
          <p className="prof--choiceText">{this.props.classProfs}</p>
          {renderItems}
        </div>
      );
    }
  }
}

export default ProficiencyFormField;
