import clipboardCopy from 'clipboard-copy';
import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const copyMessage = document.querySelector('h4');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
  displayPasswordEl.style.cursor = 'pointer';
  copyMessage.style.display = 'none';


});


displayPasswordEl.addEventListener('click', ({ target }) => {
  clipboardCopy(target.innerHTML);
  copyMessage.style.display = 'block';
});
