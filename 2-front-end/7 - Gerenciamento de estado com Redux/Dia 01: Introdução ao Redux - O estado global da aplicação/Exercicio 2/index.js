import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import './index.css';


const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ('THEME'):
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      };
    case ('STATUS'):
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline'
      };

    default: return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'THEME' });

});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'STATUS' });
});

const statusListener = (status) => {
  const statusEl = document.querySelector('#status');
  let statusBtnText = '';
  let statusMessage = '';
  if (status === 'offline') {
    statusBtnText = 'Online';
    statusMessage = 'Offline';
  }
  else {
    statusBtnText = 'Offline';
    statusMessage = 'Online';
  }
  statusButton.innerHTML = `Ficar ${statusBtnText}`;
  statusEl.innerHTML = statusMessage;
};

const themeListener = (theme) => {
  const root = document.querySelector(':root');
  let bgColor = '';
  let textColor = '';
  let themeBtnText = '';

  if (theme === 'light') {
    bgColor = 'white';
    textColor = '#333';
    themeBtnText = 'Dark Mode';
  }
  else {
    bgColor = '#333';
    textColor = 'white';
    themeBtnText = 'Light Mode';

  }
  root.style.setProperty('--bg-color', bgColor);
  root.style.setProperty('--text-color', textColor);
  themeButton.innerHTML = themeBtnText;

};

store.subscribe(() => {
  const globalState = store.getState();
  statusListener(globalState.status);
  themeListener(globalState.theme);
});