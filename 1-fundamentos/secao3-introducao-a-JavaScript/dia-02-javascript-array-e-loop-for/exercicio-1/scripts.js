let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [6, 10, 4, 20, 70, 8, 100, 200, 6, 28];

// Primeiro requisito
let soma = 0;
console.log("Números:");
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);

    soma += numbers[index];
}

// Segundo requisito
console.log("Soma: " + soma);

// Terceiro requisito
let media = soma / numbers.length;

console.log("Media: " + media);

// Quarto requisito
if (media > 20) {
    console.log("Valor maior que 20");
}
else {
    console.log("Valor menor ou igual a 20");
}

// Quinto Requisito
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log("Maior numero: " + maiorNumero);

// Sexto requisito
let quantidadeDeImpares = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        quantidadeDeImpares += 1;
    }
}

if (quantidadeDeImpares === 0) {
    console.log("Nenhum valor impar encontrado");
}
else {
    console.log("Quantidade de Impares: " + quantidadeDeImpares);
}

// Sétimo requisito
let menorNumero = maiorNumero;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}
console.log("Menor numero: " + menorNumero);

// Oitavo requisito
let arrayAte25 = [];
for (let index = 1; index <= 25; index += 1) {
    arrayAte25.push(index);

}
console.log("Array contendo números de 1 a 25: " + arrayAte25);

// Nono requisito
for (let index = 0; index < arrayAte25.length; index += 1) {
    console.log("Divisão " + arrayAte25[index] + " por 2: " + arrayAte25[index] / 2);
}
