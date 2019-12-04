import React, { useState } from "react";
import axios from "axios";
import CreateCharacterForm from "./components/CreateCharacter";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import CharacterSheet from "./components/CharacterSheetComponent";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  function checkLoginStatus() {
    axios.get("http://localhost:9000/loggedIn", { withCredentials: true }).then((response) => {
      response.status === 200 ? setloggedIn(true) : setloggedIn(false);
    });
    console.log(`Logged in ? ${loggedIn}`);
  }

  checkLoginStatus();

  if (!loggedIn) {
    return (
      <div>
        <Navbar loggedIn={loggedIn} handleLogin={checkLoginStatus} />
        <Welcome handleLogin={checkLoginStatus} />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar loggedIn={loggedIn} handleLogin={checkLoginStatus} />
        {/* <Dashboard /> */}
        <CreateCharacterForm />
      </div>
    );
  }
}

export default App;
