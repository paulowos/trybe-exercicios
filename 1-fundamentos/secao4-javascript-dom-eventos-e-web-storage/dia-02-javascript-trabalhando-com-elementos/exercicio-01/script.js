const createH1 = () => {
    const parent = document.getElementsByTagName('body')[0];
    const h1 = document.createElement('h1');
    h1.innerText = 'TrybeTrip - Agência de Viagens';
    h1.className = 'title';
    parent.appendChild(h1);
};
createH1();

const createMain = () => {
    const parent = document.getElementsByTagName('body')[0];
    const main = document.createElement('main');
    main.className = 'main-content';
    parent.appendChild(main);

};
createMain();

const createSection = (className) => {
    const parent = document.getElementsByTagName('main')[0];
    const section = document.createElement('section');
    section.className = className;
    parent.appendChild(section);
};
createSection('center-content');

const createP = () => {
    const parent = document.getElementsByTagName('main')[0].firstElementChild;
    const p = document.createElement('p');
    p.innerText = 'Algum texto';
    parent.appendChild(p);
};
createP();

createSection('left-content');
createSection('right-content');

const createImg = () => {
    const main = document.getElementsByTagName('main')[0];
    const parent = main.querySelectorAll('section')[1];
    const img = document.createElement('img');
    img.src = 'https://picsum.photos/200';
    img.className = 'small-image';
    parent.appendChild(img);
};
createImg();

const createUl = () => {
    const main = document.getElementsByTagName('main')[0];
    const parent = main.querySelectorAll('section')[2];
    const ul = document.createElement('ul');
    parent.appendChild(ul);
    const li = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
    for (let number of li) {
        const createLi = document.createElement('li');
        createLi.innerText = number;
        ul.appendChild(createLi);
    }
};
createUl();

const createH3 = () => {
    const parent = document.getElementsByTagName('main')[0];
    for (let index = 1; index <= 3; index += 1) {
        const h3 = document.createElement('h3');
        h3.className = 'description';
        parent.appendChild(h3);
    }
};
createH3();

const removeSection = () => {
    const parent = document.getElementsByTagName('main')[0];
    const child = parent.querySelectorAll('section')[1];
    parent.removeChild(child);

};
removeSection();

const centralizeSection = () => {
    const section = document.querySelector('.right-content');
    section.style.marginRight = 'auto';
};
centralizeSection();

const sectionBG = () => {
    const section = document.querySelector('.center-content');
    section.style.backgroundColor = 'green';
};
sectionBG();

const removeLi = () => {
    const main = document.getElementsByTagName('main')[0];
    const parent = main.querySelectorAll('section')[1].firstElementChild;
    parent.removeChild(parent.lastElementChild);
    parent.lastElementChild.remove();
};
removeLi();
