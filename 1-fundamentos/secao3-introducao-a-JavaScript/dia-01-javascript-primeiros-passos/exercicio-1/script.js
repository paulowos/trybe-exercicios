const a = 10;
const b = 5;
const c = 20;

// 1º requisito
let adicao;
let subtracao;
let multiplicacao;
let divisao;
let modulo;

adicao = a + b;
subtracao = a - b;
multiplicacao = a * b;
divisao = a / b;
modulo = a % b;

console.log('Adição: ' + adicao);
console.log('Subtração: ' + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log('Divisão: ' + divisao);
console.log('Resto: ' + modulo);

//  2º requisito
if (a > b) {
    console.log(a + " é maior");
}
else {
    console.log(b + " é maior");
}

// 3º requisito
if (a > b && a > c) {
    console.log(a + " é maior");
}
else if (b > a && b > c) {
    console.log(b + " é maior");
}
else {
    console.log(c + " é maior");
}

// 4º requisito
const number = -20;

if (number > 0) {
    console.log("positive");
}
else if (number < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

// 5º requisito
const deltaA = -40;
const deltaB = 100;
const deltaC = 40;
let somaAngulosInternos = deltaA + deltaB + deltaC;
let isTriangle;

if (deltaA < 0 || deltaB < 0 || deltaC < 0) {
    console.log("Erro: Ângulo invalido");
}
else if (somaAngulosInternos === 180) {
    isTriangle = true;
    console.log(isTriangle);

}
else {
    isTriangle = false;
    console.log(isTriangle);
}

// 6º requisito
const pieceXadrez = "king";

switch (pieceXadrez.toLowerCase()) {
    case "king":
        console.log("Movimento em qualquer direção, uma casa por vez");
        break;
    case "queen":
        console.log("Movimento em qualquer direção, quantas casas quiser desde que estejam livre");
        break;
    case "tower":
        console.log("Movimento em linha reta, quantas casas quiser");
        break;
    case "knight":
        console.log("Movimento em L. Pode saltar sobre outras peças");
        break;
    case "bishop":
        console.log("Movimento na diagonal");
        break;
    case "pawn":
        console.log("Movimento pra frente, uma casa por vez. Não pode retroceder");
        break;
    default:
        console.log("Peça inválida");
}

// 7º requisito
const nota = 100;
let conceito = "";

if (nota >= 90 && nota <= 100) {
    conceito = "A";
}
else if (nota >= 80 && nota < 90) {
    conceito = "B";
}
else if (nota >= 70 && nota < 80) {
    conceito = "C";
}
else if (nota >= 60 && nota < 70) {
    conceito = "D";
}
else if (nota >= 50 && nota < 60) {
    conceito = "E";
}
else if (nota < 50 && nota > 0) {
    conceito = "F";
}
else {
    conceito = "Nota Inválida";
}

console.log(conceito);












