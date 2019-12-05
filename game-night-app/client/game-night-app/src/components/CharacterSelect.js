import React from "react";
import CharacterPreview from "./CharacterPreview";
import axios from "axios";
function CharacterSelect(props) {
  function handleCharacterSelected(e) {
    props.handleCharacterSelected(e);
  }

  let characterArray = [];
  {
    props.characters.forEach((element, index) => {
      characterArray.push(
        <CharacterPreview
          key={index}
          index={index}
          handleCharacterSelected={handleCharacterSelected}
          characters={element}
        />
      );
    });
  }
  return (
    <div>
      {characterArray}
      {/* <CharacterPreview characters={props.characters} /> */}
    </div>
  );
}

export default CharacterSelect;
