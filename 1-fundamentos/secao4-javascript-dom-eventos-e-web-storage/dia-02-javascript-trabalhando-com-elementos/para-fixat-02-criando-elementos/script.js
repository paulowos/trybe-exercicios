const ondeVcEsta = document.getElementById('elementoOndeVoceEsta');

const newBorn = document.createElement('section');

const pai = document.getElementById('pai');

pai.appendChild(newBorn);

ondeVcEsta.appendChild(newBorn);

ondeVcEsta.firstElementChild.appendChild(newBorn);

const grandChild = ondeVcEsta.firstElementChild.firstElementChild;

const terceiroFilho = grandChild.parentNode.parentNode.nextElementSibling;