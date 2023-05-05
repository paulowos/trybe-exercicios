
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {

  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  let cor = '#';

  const aleatorio = () => Math.floor(Math.random() * oneChar.length);

  for (let i = 0; i < 6; i += 1) {

    cor += oneChar[aleatorio()];

  }

  return cor;

}


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ('NEXT_COLOR'):
      const max = state.colors.length - 1;
      return { ...state, index: state.index === max ? max : state.index + 1 };
    case ('PREVIOUS_COLOR'):
      const min = 0;
      return { ...state, index: state.index === min ? min : state.index - 1 };
    case ('RANDOM_COLOR'):
      return {
        colors: [...state.colors, criarCor()],
        index: state.colors.length
      };
    default: return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#previous');
const randomBtn = document.querySelector('#random');

nextBtn.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });

});

prevBtn.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});



randomBtn.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' });

});

store.subscribe(() => {
  const globalState = store.getState();
  const value = document.querySelector('#value');
  value.innerHTML = globalState.colors[globalState.index];
});