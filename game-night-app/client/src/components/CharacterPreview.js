import React, { useState } from "react";
import axios from "axios";
import "./../styles/CharacterPreviewStyles/characterPreview.css";
import portrait from "./../marcenoPortrait.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Options from "./Options";

function CharacterPreview(props) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptionStyle, setSelectedOptionStyle] = useState({ border: "" });

  function handleCharacterSelected() {
    props.handleCharacterSelected(props.index);
  }

  function handleToggleOptions() {
    setShowOptions(!showOptions);
    // if (showOptions) setSelectedOptionStyle({ border: "1px solid dodgerBlue" });
    // else setSelectedOptionStyle({ border: "1px solid white" });
    console.log("editting..", showOptions);
  }

  const OptionsToggle = (showOptions) => {
    return (
      <button className="characterPreview--btn-edit" onClick={handleToggleOptions}>
        <FontAwesomeIcon icon={"ellipsis-v"} />
      </button>
    );
  };

  return (
    <div>
      <div className="characterPreview--container" style={selectedOptionStyle}>
        <img src={portrait} alt="character portrait" onClick={handleCharacterSelected} />
        <div onClick={handleCharacterSelected}>
          <label>lvl 5</label>
          <label name="charactername">{props.characters.name}</label>
          <label name="characterRace">{props.characters.race.name}</label>
          <label name="characterClass">{props.characters.class.name}</label>
        </div>

        <OptionsToggle />
      </div>
      <Options showOptions={showOptions} characters={props.characters} />
    </div>
  );
}

export default CharacterPreview;
