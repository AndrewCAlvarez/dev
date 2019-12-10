import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
  function logout() {
    //  IMPORTANT!! Axios does not send cookies by default (cookies contain session)
    //  Must include {withCredentials: true} to send cookie
    axios.get("http://localhost:9000/logout", { withCredentials: true }).then((response) => {
      props.handleLogin();
    });
  }

  if (props.loggedIn) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <FontAwesomeIcon icon={"chevron-left"} style={{ color: "white" }} />
        <button className="navbar-brand" onClick={props.onNavigate}>
          Game Night
        </button>
        <button onClick={logout} style={{ color: "white" }}>
          Logout
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <FontAwesomeIcon icon={"chevron-left"} style={{ color: "white" }} />
        <button className="navbar-brand" onClick={props.onNavigate}>
          Game Night
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
