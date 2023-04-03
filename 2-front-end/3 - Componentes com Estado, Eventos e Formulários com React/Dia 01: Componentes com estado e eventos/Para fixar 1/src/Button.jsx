import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { children, log } = this.props;
    const handleClick = () => {
      console.log(log);
    };
    return <button onClick={handleClick}>{children}</button>;
  }
}
