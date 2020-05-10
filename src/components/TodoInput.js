import React, { Component } from 'react';
import shortid from 'shortid';
import '../styles/TodoInput.css';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    const trimmedText = text.trim();
    if (trimmedText.length > 0) {
      this.props.onSubmit({
        text,
        completed: false,
        id: shortid.generate()
      });
      this.setState({
        text: ''
      });
    }
  };
  render() {
    const { text } = this.state;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          className="todo-input"
          value={text}
          onChange={this.handleChange}
          name="text"
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}