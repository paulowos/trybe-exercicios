import React, { Component } from 'react';

class App extends Component {
  state = {
    photo: '',
    name: '',
    email: '',
    age: 0,
    loading: true,
  };

  fetchInfos = () => {
    this.setState({ loading: true }, async () => {
      const requisition = await fetch('https://api.randomuser.me/');
      const data = await requisition.json();
      const { results } = data;
      const { name, email, dob, picture } = results[0];
      const { first, last } = name;
      const { age } = dob;
      const { large } = picture;
      this.setState({
        photo: large,
        name: `${first}  ${last}`,
        email,
        age,
        loading: false,
      });
    });
  };

  componentDidMount() {
    this.fetchInfos();
  }

  shouldComponentUpdate(nProps, nState) {
    const { age } = nState;
    if (age > 50) return false;
    return true;
  }

  render() {
    const { photo, name, email, age, loading } = this.state;
    if (loading) {
      return <div>Carregando...</div>;
    }
    return (
      <div>
        <img src={photo} alt={name} />
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{age}</p>
      </div>
    );
  }
}

export default App;
