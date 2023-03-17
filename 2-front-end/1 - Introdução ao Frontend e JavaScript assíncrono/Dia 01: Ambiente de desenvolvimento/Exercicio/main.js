import './style.css';
import validator from 'validator';

const textInput = document.querySelector('#text');
const validateBtn = document.querySelector('#validate');
const result = document.querySelector('#result');
const validation = document.querySelector('#validation');

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const input = textInput.value;
  const options = {
    isEmail: validator.isEmail(input),
    isEmpty: validator.isEmpty(input),
    isLowercase: validator.isLowercase(input),
    isNumeric: validator.isNumeric(`${input}`),
    isPostalCode: validator.isPostalCode(`${input}`, 'BR'),
  };
  result.innerHTML = `A validação retornou ${options[validation.value]}`;
});
