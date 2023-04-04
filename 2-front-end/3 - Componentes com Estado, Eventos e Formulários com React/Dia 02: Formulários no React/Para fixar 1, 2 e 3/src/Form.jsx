import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    password: '',
    yesOrNo: 'yes',
    check: false,
  };

  handleChange = ({ target }) => {
    const { name, type } = target;
    let value = '';
    if (type === 'checkbox') {
      value = target.checked;
    } else if (type === 'file') {
      value = URL.createObjectURL(target.files[0]);
    } else {
      value = target.value;
    }
    this.setState({ [name]: value });
  };

  render() {
    const { name, password, yesOrNo, check, photo } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={name}
          />
          <br />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={password}
          />
        </fieldset>
        <br />
        <fieldset>
          <legend>Marcadores</legend>
          <label htmlFor="yesOrno">Sim ou Não:</label>
          <select
            name="yesOrNo"
            id="yesOrno"
            onChange={this.handleChange}
            value={yesOrNo}>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>

          <br />

          <label htmlFor="check">Marcado?</label>
          <input
            type="checkbox"
            name="check"
            id="check"
            onChange={this.handleChange}
            value={check}
          />
        </fieldset>

        <br />
        <fieldset>
          <legend>Imagem</legend>
          <label htmlFor="photo">Foto:</label>
          <input
            type="file"
            name="photo"
            id="photo"
            onChange={this.handleChange}
          />
          <br />
          <img src={photo} alt="photo" />
        </fieldset>
      </form>
    );
  }
}

export default Form;
