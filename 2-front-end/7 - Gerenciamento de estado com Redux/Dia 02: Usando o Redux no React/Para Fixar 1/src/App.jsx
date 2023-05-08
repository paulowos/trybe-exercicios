import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';
import './App.css';

class App extends React.Component {
  render() {
    const { countState, actionCreatorProp } = this.props;
    const increment5 = 5;
    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button onClick={ () => actionCreatorProp() }>Incrementa 1</button>
        <button onClick={ () => actionCreatorProp(increment5) }>
          Incrementa 5
        </button>
      </div>
    );
  }
}

App.propTypes = {
  actionCreatorProp: PropTypes.func.isRequired,
  countState: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
});

const mapDispatchToProps = {
  actionCreatorProp: actionCreator,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(App);

// const teste = connected(App);

export default connected;
