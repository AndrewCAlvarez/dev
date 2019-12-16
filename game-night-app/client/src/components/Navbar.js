import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Signout from "./Signout";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./../styles/navbarStyles/navbarStyles.css";

function Navbar() {
  const [navToggled, setNavToggled] = useState(false);
  const islogged = useSelector((state) => state.isLogged);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div>
            <button>
              <FontAwesomeIcon icon={"chevron-left"} style={{ color: "white" }} />
            </button>
          </div>
          <div className="navHome--btn">
            <button className="navbar-brand">Game Night</button>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setNavToggled(!navToggled)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        {/*Check if navbar has been toggled */}
        {navToggled ? (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Characters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Join Game
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Create Character
              </a>
            </li>
            {islogged ? (
              <li className="nav-item">
                <Signout className="nav-link" />
              </li>
            ) : (
              ""
            )}
          </ul>
        ) : (
          ""
        )}
      </div>
    </Router>
  );
}

export default Navbar;
