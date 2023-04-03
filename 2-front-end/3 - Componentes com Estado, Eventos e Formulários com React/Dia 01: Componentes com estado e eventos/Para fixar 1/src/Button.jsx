import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    count1: 0,
    count2: 0,
    count3: 0,
  };

  handleClick(key) {
    this.setState((prev) => ({ [key]: prev[key] + 1 }));
  }
  render() {
    const { log } = this.props;
    const key = `count${log}`;
    return (
      <button onClick={() => this.handleClick(key)}>{this.state[key]}</button>
    );
  }
}
