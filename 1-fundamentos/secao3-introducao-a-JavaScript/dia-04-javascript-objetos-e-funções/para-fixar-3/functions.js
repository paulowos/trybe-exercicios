const primeiroNumero = 2500;
const segundoNumero = 250;
const terceiroNumero = 100000;

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

console.log(adicao(10, 15));

function maiorEntreDois(num1, num2) {
    if (num1 === num2) {
        return "São iguais";
    }
    else if (num1 > num2) {
        return "Primeiro numero é maior";
    }
    else {
        return "Segundo numero é maior";
    }
}

console.log(maiorEntreDois(primeiroNumero, segundoNumero));

function maiorEntreTres(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        return "São iguais";
    }
    else if (num1 > num2 && num1 > num3) {
        return "Primeiro numero é maior";
    }
    else if (num2 > num3) {
        return "Segundo numero é maior";

    }
    else {
        return "Terceiro numero é maior";
    }
}

console.log(maiorEntreTres(primeiroNumero, segundoNumero, terceiroNumero));

function positivoOuNegativo(valor) {
    if (valor === 0) {
        return "Zero";
    }
    else if (valor > 0) {
        return "Positivo";
    }
    else {
        return "Negativo";
    }
}

console.log(positivoOuNegativo(0));

function angleTriangle(primeiroAngulo, segundoAngulo, terceiroAngulo) {
    let soma = primeiroAngulo + segundoAngulo + terceiroAngulo;
    if (primeiroAngulo <= 0 || segundoAngulo <= 0 || terceiroAngulo <= 0) {
        return "Valor invalido";
    }

    if (soma === 180) {
        return true;
    }
    else {
        return false;
    }
}

console.log(angleTriangle(120, 40, 20));



