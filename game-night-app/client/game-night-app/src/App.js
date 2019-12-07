import React, { useState } from "react";
import axios from "axios";
import CreateCharacter from "./components/CreateCharacter";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import CharacterSheet from "./components/CharacterSheet";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  function checkLoginStatus() {
    axios
      .get("http://134.209.163.182:9000/loggedIn", { withCredentials: true })
      .then((response) => {
        response.data === "LOGGED_IN" ? setloggedIn(true) : setloggedIn(false);
      });
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
        <Dashboard />
      </div>
    );
  }
}

export default App;
