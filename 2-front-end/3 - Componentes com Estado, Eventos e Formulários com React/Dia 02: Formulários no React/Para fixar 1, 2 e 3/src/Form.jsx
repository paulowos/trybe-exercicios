import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  state = {
    name: '',
    password: '',
    yesOrNo: 'yes',
    check: false,
    error: false,
  };

  handleError = () => {
    const { name, password, yesOrNo, check } = this.state;

    const cases = [!name.length, !password.length, !yesOrNo.length, !check];
    const condition = cases.every((e) => e !== true);
    this.setState({ error: condition });
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
    this.setState({ [name]: value }, this.handleError);
  };

  render() {
    const { name, password, yesOrNo, check, photo, error } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Login</legend>
          <Input
            callback={this.handleChange}
            name="name"
            value={name}
            type="text">
            Nome:
          </Input>
          <br />
          <Input
            callback={this.handleChange}
            name="password"
            value={password}
            type="password">
            Senha:
          </Input>
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
        {error ? (
          <span style={{ color: 'green' }}>Preenchido</span>
        ) : (
          <span style={{ color: 'red' }}>Preencha</span>
        )}
      </form>
    );
  }
}

export default Form;
