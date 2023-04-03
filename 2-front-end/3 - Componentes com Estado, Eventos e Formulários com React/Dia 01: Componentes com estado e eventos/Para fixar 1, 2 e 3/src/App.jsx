import React, { Component } from 'react';
import Button from './Button';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button log="1">Clique</Button>
        <Button log="2">Clique 2</Button>
        <Button log="3">Clique 3</Button>
      </div>
    );
  }
}
