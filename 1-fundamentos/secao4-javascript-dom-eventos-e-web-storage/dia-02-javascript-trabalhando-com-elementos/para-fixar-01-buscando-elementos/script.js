const ondeVcEsta = document.getElementById('elementoOndeVoceEsta');
ondeVcEsta.parentNode.style.color = "red";
ondeVcEsta.firstElementChild.innerText = "Preste";

const pai = document.getElementById('pai');
let primeiroFilho = pai.firstElementChild;
primeiroFilho = ondeVcEsta.previousElementSibling;

const atencao = ondeVcEsta.nextSibling;

let terceiroFilho = ondeVcEsta.nextElementSibling;

terceiroFilho = pai.lastElementChild.previousElementSibling;