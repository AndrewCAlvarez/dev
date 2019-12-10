import React, { useState } from "react";
import axios from "axios";
import CreateCharacter from "./components/CreateCharacter";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import CharacterSheet from "./components/CharacterSheet";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faEllipsisV,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(fab, faCheckSquare, faCoffee, faEllipsisV, faChevronLeft);

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  function checkLoginStatus() {
    axios.get("http://localhost:9000/loggedIn", { withCredentials: true }).then((response) => {
      console.log(response);
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
