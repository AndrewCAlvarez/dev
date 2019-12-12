import React, { useState } from "react";
import axios from "axios";
import CharacterSelect from "./CharacterSelect";
import CreateCharacter from "./CreateCharacter";
import CharacterSheet from "./CharacterSheet";
import loading from "./loading.gif";

function Dashboard() {
  const [characters, setCharacters] = useState("");
  const [createCharacter, setCreateCharacter] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  function handleCharacterChange() {
    axios
      .get("http://localhost:9000/playerCharacter", { withCredentials: true })
      .then((response) => {
        //  if length is 0, then there are no characters
        response.data.length === 0 ? setCharacters("none") : setCharacters(response.data);
      });
  }

  function handleCreateCharacter() {
    console.log("Create character clicked");
    setCreateCharacter(!createCharacter);
    console.log(createCharacter);
    handleCharacterChange();
  }

  function handleCharacterSelected(characterIndex) {
    console.log(`Dashboard characterIndex: ${characterIndex}`);
    console.log(`Dashboard character[characterIndex]: ${characters[characterIndex].name}`);
    setSelectedCharacter(characters[characterIndex]);
  }

  if (characters === "") {
    handleCharacterChange();
    return <img src={loading} />;
  } else if (characters === "none" && createCharacter === false) {
    return (
      <button className="btn btn-primary" onClick={handleCreateCharacter}>
        Add New Character
      </button>
    );
  } else if (createCharacter === true) {
    return (
      <div>
        <h3>Character Creation</h3>
        <CreateCharacter
          handleCreateCharacter={handleCreateCharacter}
          handleCharacterChange={handleCharacterChange}
        />
      </div>
    );
  } else if (selectedCharacter != null) {
    console.log(`Selected character name: ${selectedCharacter.name}`);
    return (
      <div>
        <CharacterSheet character={selectedCharacter} />
      </div>
    );
  } else {
    return (
      <div>
        <h3>Dashboard</h3>
        <button className="btn btn-primary" onClick={handleCreateCharacter}>
          Add New Character
        </button>
        <CharacterSelect
          handleCharacterSelected={handleCharacterSelected}
          characters={characters}
        />
      </div>
    );
  }
}

export default Dashboard;
