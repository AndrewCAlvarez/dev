import React, { useState } from "react";
import axios from "axios";
import CreateCharacterForm from "./components/CreateCharacterForm";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import CharacterSelect from "./components/CharacterSelectComponent";
import Signup from "./components/Signup";
import CharacterSheet from "./components/CharacterSheetComponent";
import Welcome from "./components/Welcome";

import "./App.css";
import Axios from "axios";

function App() {
  const [loggedin, setLoggedIn] = useState(false);

  function handleLogin(loggedIn) {
    setLoggedIn(loggedIn);
  }

  if (!loggedin) {
    return (
      <div>
        <Welcome userLoggedIn={handleLogin} />
      </div>
    );
  } else {
    return (
      <div>
        <CharacterSelect />
      </div>
    );
  }
}

export default App;
