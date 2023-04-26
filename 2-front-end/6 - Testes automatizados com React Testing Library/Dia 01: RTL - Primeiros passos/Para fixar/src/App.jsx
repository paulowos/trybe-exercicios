// App.js
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      color: '',
    };
  }

  verifyEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { email } = this.state;
    if (emailRegex.test(email)) {
      return 'green';
    }
    return 'red';
  };

  changeEmail = (value) => {
    this.setState({ email: value });
  };

  changeSaveEmail = (value) => {
    this.setState({ saveEmail: value, email: '', color: this.verifyEmail() });
  };

  render() {
    const { email, saveEmail, color } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={email}
            type="email"
            onChange={(e) => this.changeEmail(e.target.value)}
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <h2
          className={color}
          data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    );
  }
}

export default App;
