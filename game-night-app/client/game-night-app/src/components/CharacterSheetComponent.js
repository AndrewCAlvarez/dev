import React, { useState } from "react";
import axios from "axios";
import portrait from "./../marcenoPortrait.jpg";
import loading from "./loading.gif";

function CharacterSheet() {
  const [character, setCharacter] = useState("");

  function handleCharacterChange() {
    axios.get("http://localhost:9000/playerCharacter").then((response) => {
      console.log(response);
      setCharacter(response.data[0]);
    });
  }

  if (character === "") {
    handleCharacterChange();
    return <img src={loading} />;
  } else {
    return (
      <div>
        <h1>{character.name}</h1>
        <div>
          <img src={portrait} onClick={handleCharacterChange} />
          <p>
            {character.name} {character.race.name} {character.class.name}
          </p>
        </div>
        <div>
          <p>
            Hit dice: {character.class.hit_dice} | Saving throws:{" "}
            {character.class.prof_saving_throws}
          </p>
        </div>
        <div>
          <h4>Ability Scores</h4>
          <p>
            Strength {character.stats.strength} Modifier:{" "}
            {Math.floor((character.stats.strength - 10) / 2)}
          </p>
          <p>
            Dexterity {character.stats.dexterity} Modifier:{" "}
            {Math.floor((character.stats.dexterity - 10) / 2)}
          </p>
          <p>
            Constitution {character.stats.constitution} Modifier:{" "}
            {Math.floor((character.stats.constitution - 10) / 2)}
          </p>
          <p>
            Intelligence {character.stats.strength} Modifier:{" "}
            {Math.floor((character.stats.strength - 10) / 2)}
          </p>
          <p>
            Wisdom {character.stats.wisdom} Modifier:{" "}
            {Math.floor((character.stats.wisdom - 10) / 2)}
          </p>
          <p>
            Charisma {character.stats.charisma} Modifier:{" "}
            {Math.floor((character.stats.charisma - 10) / 2)}
          </p>
        </div>
      </div>
    );
  }
}
export default CharacterSheet;
