import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateCharacter from "./components/CreateCharacter";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import CharacterSheet from "./components/CharacterSheet";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import CharacterSelect from "./components/CharacterSelect";
import loading from "./components/loading.gif";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faEllipsisV,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { signin, signout } from "./redux/actions";

library.add(fab, faCheckSquare, faCoffee, faEllipsisV, faChevronLeft);

function App() {
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  console.log(isLoggedIn);

  useEffect(() => {
    axios.get("http://localhost:9000/loggedIn", { withCredentials: true }).then((response) => {
      console.log(response);
      response.data === "LOGGED_IN" ? dispatch(signin()) : dispatch(signout());
    });
  }, []);

  switch (isLoggedIn) {
    case false:
      return (
        <Router>
          <div>
            <Navbar />
            <Welcome />
          </div>
        </Router>
      );

    case true:
      return (
        <Router>
          <div>
            <Navbar />
            <Route path="/" component={Dashboard} />
            <Route path="/createcharacter" component={CreateCharacter} />
          </div>
        </Router>
      );

    case "CHECKING_STATUS":
      return (
        <div>
          <Navbar />
          <img src={loading} />
        </div>
      );

    default:
      return (
        <Router>
          <div>
            <Navbar />
            <Welcome />
          </div>
        </Router>
      );
  }
}

export default App;
