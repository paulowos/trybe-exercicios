//Requisito 1
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

//Requisito 2
const main = document.getElementsByTagName('main')[0];
const changeFontColor = () => {
    const fontColor = document.querySelectorAll('#fontColor button');
    main.style.color = localStorage.getItem('colorFont');
    for (let button of fontColor) {
        button.addEventListener('click', (event) => {
            localStorage.setItem('colorFont', event.target.innerText);
            main.style.color = localStorage.getItem('colorFont');
        });
    }
};
changeFontColor();

//Requisito 3
const changeFontSize = () => {
    const fontSize = document.querySelectorAll('#fontSize button');
    main.style.fontSize = localStorage.getItem('sizeFont');
    for (let button of fontSize) {
        button.addEventListener('click', (event) => {
            localStorage.setItem('sizeFont', event.target.innerText);
            main.style.fontSize = localStorage.getItem('sizeFont');
        });
    }
};
changeFontSize();

//Requisito 4
const changeLineHeight = () => {
    const lineHeight = document.querySelectorAll('#lineHeight button');
    main.style.lineHeight = localStorage.getItem('heightLine');
    for (let button of lineHeight) {
        button.addEventListener('click', (event) => {
            localStorage.setItem('heightLine', event.target.innerText);
            main.style.lineHeight = localStorage.getItem('heightLine');
        });
    }
};
changeLineHeight();

//Requisito 5
const changeFontType = () => {
    const fontType = document.querySelectorAll('#fontType button');
    main.style.fontFamily = localStorage.getItem('typeFont');
    for (let button of fontType) {
        button.addEventListener('click', (event) => {
            localStorage.setItem('typeFont', event.target.innerText);
            main.style.fontFamily = localStorage.getItem('typeFont');
        });
    }
};
changeFontType();

