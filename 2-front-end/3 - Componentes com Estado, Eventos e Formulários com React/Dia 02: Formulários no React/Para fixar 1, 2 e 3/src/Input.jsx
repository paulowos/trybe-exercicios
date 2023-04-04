import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { callback, name, value, children, type } = this.props;
    return (
      <>
        <label htmlFor={name}>{children}</label>
        <input
          type={type}
          name={name}
          id={name}
          onChange={callback}
          value={value}
        />
      </>
    );
  }
}

export default Input;
