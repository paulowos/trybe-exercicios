import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAPI } from './redux/actions';
import './App.css';

class App extends Component {
  render() {
    const { catImg, loading, dispatch } = this.props;
    if (loading) return <h1 className="App">Carregando...</h1>;
    return (
      <div className="App">
        {catImg && <img src={catImg} alt={catImg} />}
        <br />
        <button
          type="button"
          onClick={() => {
            dispatch(fetchAPI());
          }}>
          Novo Gato
        </button>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  loading: globalState.loading,
  catImg: globalState.catImg,
});

export default connect(mapStateToProps)(App);
