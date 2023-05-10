import React, { Component } from 'react';
import { connect } from 'react-redux';

class Info extends Component {
  render() {
    const { infos, loading } = this.props;
    const { name, culture, titles, aliases } = infos;
    if (loading) return <h1>Carregando...</h1>;
    return (
      <div className="info">
        <h1>{name}</h1>
        <h3>{culture}</h3>
        {titles.map((title, index) => (
          <p key={index}>{title}</p>
        ))}
        <hr />
        {aliases.map((alias, index) => (
          <p key={index}>{alias}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ infos, loading }) => ({
  infos,
  loading,
});

export default connect(mapStateToProps)(Info);
