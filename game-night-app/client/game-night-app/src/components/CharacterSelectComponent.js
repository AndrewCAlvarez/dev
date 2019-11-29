import React from "react";
import CharacterPreview from "./CharacterPreviewComponent";
class CharacterSelect extends React.Component {
  render() {
    return (
      <div>
        <h4>Character Roster</h4>
        <CharacterPreview />
        <CharacterPreview />
        <CharacterPreview />
        <CharacterPreview />
        <CharacterPreview />
      </div>
    );
  }
}

export default CharacterSelect;
