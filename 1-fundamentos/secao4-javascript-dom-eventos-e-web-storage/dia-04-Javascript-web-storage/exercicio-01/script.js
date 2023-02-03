const backgroundColor = document.querySelectorAll('#backgroundColor button');

for (let button of backgroundColor) {
    button.addEventListener('click', (event) => {
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = event.target.innerText;
    });
}
