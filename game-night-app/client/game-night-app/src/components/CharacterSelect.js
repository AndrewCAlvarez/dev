import React from "react";
import CharacterPreview from "./CharacterPreview";
import axios from "axios";
function CharacterSelect() {
  return (
    <div>
      <CharacterPreview />
      <CharacterPreview />
      <CharacterPreview />
      <CharacterPreview />
      <CharacterPreview />
    </div>
  );
}

export default CharacterSelect;
