import './style.css';
import Swal from 'sweetalert2';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    preEl.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    Swal.fire({
      title: 'Erro',
      text: 'CEP Inválido',
      icon: 'error',
      background: 'rgb(25, 25, 25)',
      color: 'white'
    });
    return error.message;
  }
}
