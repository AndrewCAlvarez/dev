import React, { useState } from "react";
import axios from "axios";
import portrait from "./../marcenoPortrait.jpg";
import loading from "./loading.gif";

function CharacterSheet(props) {
  const [character, setCharacter] = useState("");

  return (
    <div>
      <div>
        <img src={portrait} />
        <h4>{props.character.name}</h4>
        <p>
          level 5 {props.character.race.name} {props.character.class.name}
        </p>
      </div>
      <div>
        <p>Health: 25 Armor Class: 16</p>
        <p>
          Hit dice: {props.character.class.hit_dice} | Saving throws:{" "}
          {props.character.class.prof_saving_throws}
        </p>
      </div>
      <div>
        <h4>Ability Scores</h4>
        <p>
          Strength {props.character.stats.strength} Modifier:{" "}
          {Math.floor((props.character.stats.strength - 10) / 2)}
        </p>
        <p>
          Dexterity {props.character.stats.dexterity} Modifier:{" "}
          {Math.floor((props.character.stats.dexterity - 10) / 2)}
        </p>
        <p>
          Constitution {props.character.stats.constitution} Modifier:{" "}
          {Math.floor((props.character.stats.constitution - 10) / 2)}
        </p>
        <p>
          Intelligence {props.character.stats.strength} Modifier:{" "}
          {Math.floor((props.character.stats.strength - 10) / 2)}
        </p>
        <p>
          Wisdom {props.character.stats.wisdom} Modifier:{" "}
          {Math.floor((props.character.stats.wisdom - 10) / 2)}
        </p>
        <p>
          Charisma {props.character.stats.charisma} Modifier:{" "}
          {Math.floor((props.character.stats.charisma - 10) / 2)}
        </p>
      </div>
      <div>
        <h4>Weapons</h4>
        <p>Greatsword To Hit: +1 Damage: 2d6</p>
      </div>
      <div>
        <h4>Items</h4>
        <p>Potion of healing</p>
        <p>Hempen Rope</p>
        <p>Hag's brooch</p>
        <p>Pet rock</p>
      </div>
    </div>
  );
}

export default CharacterSheet;
