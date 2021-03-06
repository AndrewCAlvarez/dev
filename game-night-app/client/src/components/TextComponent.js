import React from "react";

class TextComponent extends React.Component {
  handleChange(e) {
    this.props.onTextChange(e.target.value);
  }

  render() {
    return (
      <div>
        <textarea onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
}

export default TextComponent;
