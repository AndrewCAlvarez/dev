import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button className="navbar-brand" href="#">
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
