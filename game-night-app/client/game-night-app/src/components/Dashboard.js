import React, { useState } from "react";
import CharacterSelect from "./CharacterSelect";

function Dashboard() {
  const [characters, setCharacters] = useState();

  return (
    <div>
      <button>Add New Character</button>
      <CharacterSelect characters={characters} />
    </div>
  );
}

export default Dashboard;
