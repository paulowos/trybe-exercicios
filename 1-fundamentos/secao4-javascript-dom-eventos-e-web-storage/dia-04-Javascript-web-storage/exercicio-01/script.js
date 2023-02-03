
const changeBgColor = () => {
    const backgroundColor = document.querySelectorAll('#backgroundColor button');
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = localStorage.getItem('colorBG');
    for (let button of backgroundColor) {
        button.addEventListener('click', (event) => {
            localStorage.setItem('colorBG', event.target.innerText);
            body.style.backgroundColor = localStorage.getItem('colorBG');
        });
    }
};
changeBgColor();