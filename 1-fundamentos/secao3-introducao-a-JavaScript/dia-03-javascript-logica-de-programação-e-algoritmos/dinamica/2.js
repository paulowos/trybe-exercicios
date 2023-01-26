
let divisíveis = []; //criamos um array para armazenar a variável
for (let index = 2; index <= 150; index += 1) { //criamos um loop para adicionar os números no array;
    if (index % 3 === 0) { // criamos em qual condição os números seriam divisiveis por 3
        divisíveis.push(index); //adicionamos esses números divisivei por 3 no array
    }
}
if (divisíveis.length === 50) { // outra condição agora, aqui verifica se o número de números divisivei por 3 é igual a 50
    console.log('mensagem secreta'); // caso sim mensagem secreta
    console.log(divisíveis.length);
} else {
    console.log(divisíveis.length);
}