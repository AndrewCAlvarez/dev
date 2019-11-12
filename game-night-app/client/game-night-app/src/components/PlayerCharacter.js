import React from "react";
import Spell from "./SpellComponent";
import axios from "axios";

class PlayerCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", spells: [{}] };
  }

  callAPI() {
    // fetch("http://localhost:9000")
    //   .then((res) => res.text())
    //   .then((res) => this.setState({ apiResponse: res }));

    //  The data is held in "data" with axios as opposed to body in fetch
    axios.get("https://api.open5e.com/spells/").then((response) => {
      this.setState({ spells: response.data.results });
      console.log(this.state.spells[9]);
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    if (this.state.spells.length > 1) {
      var index = Math.floor(Math.random() * 50);
      return (
        <div>
          <Spell spell={this.state.spells[index]} />
          <Spell spell={this.state.spells[index]} />
          <Spell spell={this.state.spells[index]} />
        </div>
      );
    } else {
      return (
        <img
          alt="Loading Image"
          src="https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif"
        />
      );
    }
  }
}

export default PlayerCharacter;
