import './style.css';

const dogBtn = document.querySelector('#dog');
const catBtn = document.querySelector('#cat');
const surpriseBtn = document.querySelector('#surprise');
const img = document.querySelector('img');

dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => { img.src = data.message; });
});

catBtn.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => { img.src = data.file; });
});

surpriseBtn.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow'),
  ]).then((response) => response.json())
    .then((data) => {
      const petUrl = data.file || data.message;
      img.src = petUrl;
    });
});
