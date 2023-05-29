import { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    name: '',
    age: '',
    city: '',
    modulo: '',
  });

  const { name, age, city, modulo } = state;

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleClick = () => {
    console.log(state);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Idade"
        value={age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Cidade"
        value={city}
        name="city"
        onChange={handleChange}
      />
      <fieldset>
        <input
          type="radio"
          name="modulo"
          id="fundamentos"
          value="fundamentos"
          checked={modulo === 'fundamentos'}
          onChange={handleChange}
        />
        <label htmlFor="fundamentos">Fundamentos</label>

        <input
          type="radio"
          name="modulo"
          id="front-end"
          value="front-end"
          checked={modulo === 'front-end'}
          onChange={handleChange}
        />
        <label htmlFor="front-end">Front-End</label>

        <input
          type="radio"
          name="modulo"
          id="back-end"
          value="back-end"
          checked={modulo === 'back-end'}
          onChange={handleChange}
        />
        <label htmlFor="back-end">Back-End</label>

        <input
          type="radio"
          name="modulo"
          id="cs"
          value="cs"
          checked={modulo === 'cs'}
          onChange={handleChange}
        />
        <label htmlFor="cs">Ciência da Computação</label>
      </fieldset>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </form>
  );
}
