// 1º requisito
const a = 10;
const b = 4;
const c = 8;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log("Pelo menos um é par");
}
else {
    console.log("Nenhum é par");
}

// 2º requisito
if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    console.log("Pelo menos um é impar");
}
else {
    console.log("Nenhum é impar");
}

// 3º requisito
const custo = 100;
const valorVenda = 160;
let custoTotal = 0;
let lucro = 0;

custoTotal = custo + (custo * 0.2);
lucro = valorVenda - custoTotal;

if (custo < 0 || valorVenda < 0) {
    console.log("Erro, valor menor que zero");
}
else {
    console.log("o Lucro foi de: " + lucro);
}

// 4º requisito
let salarioBruto = 3000;
let salarioBase = 0;
let salarioLiquido = 0;
let aliquotaINSS = 0;
let aliquotaIR = 0;

if (salarioBruto > 5189.82) {
    aliquotaINSS = salarioBruto - 570.80;
}
else if (salarioBruto > 2594.93) {
    aliquotaINSS = salarioBruto * 0.11;
}
else if (salarioBruto > 1556.95) {
    aliquotaINSS = salarioBruto * 0.09;
}
else {
    aliquotaINSS = salarioBruto * 0.08;
}

salarioBase = salarioBruto - aliquotaINSS;
console.log(salarioBase);

if (salarioBase > 4664.68) {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}
else if (salarioBase > 3751.06) {
    aliquotaIR = salarioBase * 0.225 - 636.13;
}
else if (salarioBase > 2826.66) {
    aliquotaIR = salarioBase * 0.15 - 354.80;
}
else if (salarioBase > 1903.99) {
    aliquotaIR = salarioBase * 0.075 - 142.80;
}
else {
    aliquotaIR = 0;

}

salarioLiquido = salarioBase - aliquotaIR;
console.log(salarioLiquido);
