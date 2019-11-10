import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <input type="submit"></input>
        </form>
        {/* <p>{this.state.name}</p> */}
      </div>
    );
  }
}

export default Form;
