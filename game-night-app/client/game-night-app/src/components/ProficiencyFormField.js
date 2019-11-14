import React from "react";

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
function searchStr(str, skillsArray) {
  let availableSkillsArr = [];
  skillsArray.forEach((element) => {
    let strLen = element.length;
    let strStart = str.search(element);
    availableSkillsArr.push(str.substr(strStart, strLen));
    console.log(str.substr(strStart, strLen));
  });

  //   console.log(str);
  //   console.log("Start index:" + strStart);
  //   console.log("End index:" + strLen);
  //   console.log("Result:" + n);

  return availableSkillsArr;
}

function ProficiencyFormField(props) {
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

  if (props.classProfs === undefined) {
    return (
      <img
        alt="Loading Image"
        src="https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif"
      />
    );
  } else {
    let renderItems = [];
    //  this currently just renders all the skills without
    //  checking to see if the class is allowed to use them
    profSkills.forEach((element) => {
      renderItems.push(
        <div>
          <label>{element}</label>
          <input type="checkbox" />
        </div>
      );
    });
    return renderItems;
  }
}

export default ProficiencyFormField;
