
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

const changeFontColor = () => {
    const fontColor = document.querySelectorAll('#fontColor button');
    const main = document.getElementsByTagName('main')[0];
    main.style.color = localStorage.getItem('colorFont');
    for (let button of fontColor) {
        button.addEventListener('click', (event) => {
            localStorage.setItem('colorFont', event.target.innerText);
            main.style.color = localStorage.getItem('colorFont');
        });
    }
};
changeFontColor();