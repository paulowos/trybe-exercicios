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

  setBtnColor(num) {
    return num % 2 === 0 ? '#cee7cc' : 'grey';
  }

  handleClick(key) {
    this.setState(
      (prev) => ({ [key]: prev[key] + 1 }),
      () => console.log(this.setBtnColor(this.state[key]))
    );
  }

  render() {
    const { log } = this.props;
    const key = `count${log}`;
    const style = {
      backgroundColor: this.setBtnColor(this.state[key]),
      border: 'none',
      padding: '20px 40px',
      margin: 20,
    };

    return (
      <button onClick={() => this.handleClick(key)} style={style}>
        {this.state[key]}
      </button>
    );
  }
}
