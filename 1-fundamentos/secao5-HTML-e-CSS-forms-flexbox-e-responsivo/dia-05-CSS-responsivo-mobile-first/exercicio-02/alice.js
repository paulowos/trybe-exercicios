const menuDropdown = () => {
    const nav = document.querySelector('#menu-items');
    const menu = document.getElementById('menu');

    menu.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
};
menuDropdown();

const chapterDropdown = () => {
    const chapter = document.getElementById('chapters-dropdown');
    const list = document.querySelector('.aside-one ul');

    chapter.addEventListener('click', () => {
        list.style.display = list.style.display === 'block' ? 'none' : 'block';
    });
    return list;
};

chapterDropdown();
