import React from "react";
import CharacterPreview from "./CharacterPreviewComponent";
class CharacterSelect extends React.Component {
  openCharacterSheet() {
    console.log("Open character sheet.");
  }
  render() {
    return (
      <div>
        <h4>Character Roster</h4>
        <CharacterPreview handleCharacterSelected={this.openCharacterSheet} />
        <CharacterPreview />
        <CharacterPreview />
        <CharacterPreview />
        <CharacterPreview />
      </div>
    );
  }
}

export default CharacterSelect;
