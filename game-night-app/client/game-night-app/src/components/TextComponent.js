import React from "react";

class TextComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.onTextChange(e.target.value);
  }

  render() {
    return (
      <div>
        <p>Characteristics</p>
        <textarea onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
}

export default TextComponent;
