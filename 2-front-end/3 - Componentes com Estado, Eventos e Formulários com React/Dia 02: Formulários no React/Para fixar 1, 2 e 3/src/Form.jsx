import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ name: value });
  };

  render() {
    return (
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" name="password" />
        </label>
        <br />
        <label>
          Sim ou Não:
          <select name="yesOrNo">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
