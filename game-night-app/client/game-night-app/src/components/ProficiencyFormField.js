import React from "react";
import loadingGif from "./loading.gif";

/*
Acrobatics - Dexterity (PHB 176)
Animal Handling - Wisdom (PHB 178)
Arcana - Intelligence (PHB 177)
Athletics - Strength (PHB 175)
Deception - Charisma (PHB 178)
Endurance - Constitution (PHB 176 as Constitution checks; House, see below)
History - Intelligence (PHB 177)
Insight - Wisdom (PHB 178)
Intimidation - Charisma (PHB 179)
Investigation - Intelligence (PHB 178)
Medicine - Wisdom (PHB 178)
Nature - Intelligence (PHB 178)
Perception - Wisdom (PHB 178)
Performance - Charisma (PHB 179)
Persuasion - Charisma (PHB 179)
Religion - Intelligence (PHB 178)
Sleight of Hand - Dexterity (PHB 177)
Stealth - Dexterity (PHB 177)
Survival - Wisdom (PHB 178)
*/

//  Right now this function is not being called, but it needs to find all the profs
//  that are available to the class, then push them to an array
function searchStr(str, skillsArray, playerClass) {
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

function ProficiencyFormField(props) {
  if (props.classProfs === undefined || props.playerClass === undefined) {
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

    let availableSkills = searchStr(props.classProfs, profSkills, props.playerClass);
    let renderItems = [];
    //  this currently just renders all the skills without
    //  checking to see if the class is allowed to use them
    availableSkills.forEach((element, index) => {
      renderItems.push(
        <div key={"proficiency" + index}>
          <label>{element}</label>
          <input type="checkbox" profname={element} />
        </div>
      );
    });
    return (
      <div>
        <p>{props.classProfs}</p>
        <div>{renderItems}</div>
      </div>
    );
  }
}

export default ProficiencyFormField;
