import React, { Component } from 'react';
import Button from './Button';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button log="teste">Clique</Button>
        <Button log="teste 2">Clique 2</Button>
        <Button log="teste 3">Clique 3</Button>
      </div>
    );
  }
}
