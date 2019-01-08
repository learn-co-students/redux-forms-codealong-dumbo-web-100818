import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label> Add ToDo </label>
            <input
              type="text"
              value={this.state.text}
              onChange={e => this.handleChange(e)}
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
