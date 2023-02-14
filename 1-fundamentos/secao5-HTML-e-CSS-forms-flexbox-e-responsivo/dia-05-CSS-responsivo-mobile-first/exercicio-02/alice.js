const nav = document.querySelector('#menu-items');
const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'none' ? '' : 'none';
});