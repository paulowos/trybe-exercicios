import './style.css';
import Swal from 'sweetalert2';

const randomHeroBtn = document.querySelector('#randomHero');
const heroImg = document.querySelector('img');
const heroName = document.querySelector('h1');

randomHeroBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const heroIdLength = 600;
  const id = Math.round(Math.random() * heroIdLength);
  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      heroImg.src = `${data.images.md}`;
      heroName.innerText = `${data.name}`;
    })
    .catch(() => Swal.fire(
      {
        icon: 'error',
        title: 'Error',
        text: 'Hero not Found',
        background: '#434c5e',
        color: '#bf616a',
      },
    ));
});
