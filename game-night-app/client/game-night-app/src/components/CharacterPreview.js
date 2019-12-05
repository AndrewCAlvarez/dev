import React from "react";
import axios from "axios";
import "./../styles/CharacterPreviewStyles/characterPreview.css";
import portrait from "./../marcenoPortrait.jpg";

function CharacterPreview(props) {
  function handleCharacterSelected() {
    props.handleCharacterSelected(props.index);
  }
  return (
    <div onClick={handleCharacterSelected}>
      <div className="characterPreview--container">
        <img src={portrait} alt="character portrait" />
        <label name="charactername">{props.characters.name}</label>
        <label name="characterRace">{props.characters.race.name}</label>
        <label name="characterClass">{props.characters.class.name}</label>
      </div>
    </div>
  );
}

export default CharacterPreview;
