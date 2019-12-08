import React from "react";

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
