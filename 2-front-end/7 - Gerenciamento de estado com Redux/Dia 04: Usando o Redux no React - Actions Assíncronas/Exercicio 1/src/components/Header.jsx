import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInfos } from '../redux/actions';

class Header extends Component {
  state = { nameInput: '' };

  handleChange = ({ target }) => {
    const split = target.value.split(' ');
    const join = split.join('%20');
    this.setState({ nameInput: join });
  };

  handleClick = () => {
    const { dispatch } = this.props;
    const { nameInput } = this.state;
    dispatch(getInfos(nameInput));
  };
  render() {
    return (
      <header>
        <input
          type="text"
          placeholder="Nome Completo"
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleClick}>
          Pesquisar
        </button>
      </header>
    );
  }
}

export default connect()(Header);
