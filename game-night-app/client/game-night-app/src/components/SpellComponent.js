import React from "react";
import axios from "axios";

class Spell extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.spell.name}</p>
        <p>{this.props.spell.desc}</p>
      </div>
    );
  }
}

export default Spell;
