import React from "react";
import "./../styles/CharacterPreviewStyles/characterPreview.css";
import portrait from "./../marcenoPortrait.jpg";

class CharacterPreview extends React.Component {
  openCharacterSheet(props) {
    console.log("Character preview.");
    this.props.handleCharacterSelected();
  }

  render() {
    return (
      <div>
        <div className="characterPreview--container" onClick={() => this.openCharacterSheet()}>
          <img src={portrait} alt="character portrait" />
          <label name="charactername">Marceno</label>
          <label name="characterLevel">Level 5</label>
          <label name="characterRace">Human</label>
          <label name="characterClass">Fighter</label>
        </div>
      </div>
    );
  }
}

export default CharacterPreview;
