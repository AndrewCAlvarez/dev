import React from "react";
import axios from "axios";
import "./../styles/CharacterPreviewStyles/characterPreview.css";
import portrait from "./../marcenoPortrait.jpg";

function CharacterPreview() {
  function checkAuth() {
    axios.get("http://localhost:9000/logout").then((response) => {
      console.log(`Authorized ? ${response}`);
    });
  }
  return (
    <div>
      <div className="characterPreview--container" onClick={checkAuth}>
        <img src={portrait} alt="character portrait" />
        <label name="charactername">Marceno</label>
        <label name="characterLevel">Level 5</label>
        <label name="characterRace">Human</label>
        <label name="characterClass">Fighter</label>
      </div>
    </div>
  );
}

export default CharacterPreview;
