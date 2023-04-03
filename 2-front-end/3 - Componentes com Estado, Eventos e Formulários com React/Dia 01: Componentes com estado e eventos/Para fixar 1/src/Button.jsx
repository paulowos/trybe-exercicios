import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { log } = this.props;
    console.log(log);
  }
  render() {
    const { children } = this.props;
    return <button onClick={this.handleClick}>{children}</button>;
  }
}
