import React, { useState } from "react";
import axios from "axios";
import CharacterSelect from "./CharacterSelect";
import CreateCharacter from "./CreateCharacter";
import CharacterSheet from "./CharacterSheet";
import Chat from "./Chat";
// import { userInfo } from "os";

function Dashboard() {
  const [characters, setCharacters] = useState("");
  const [createCharacter, setCreateCharacter] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  function handleCharacterChange() {
    axios
      .get("http://gatorwebdev.com:9000/playerCharacter", { withCredentials: true })
      .then((response) => {
        response.data.length === 0 ? console.log("ZERO") : setCharacters(response.data);
      });
  }

  function handleCreateCharacter() {
    setCreateCharacter(!createCharacter);
    handleCharacterChange();
  }

  function handleCharacterSelected(characterIndex) {
    console.log(`Dashboard characterIndex: ${characterIndex}`);
    console.log(`Dashboard character[characterIndex]: ${characters[characterIndex].name}`);
    setSelectedCharacter(characters[characterIndex]);
  }

  if (characters === "" || createCharacter === true) {
    handleCharacterChange();
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
        {/* <Chat /> */}
      </div>
    );
  }
}

export default Dashboard;
