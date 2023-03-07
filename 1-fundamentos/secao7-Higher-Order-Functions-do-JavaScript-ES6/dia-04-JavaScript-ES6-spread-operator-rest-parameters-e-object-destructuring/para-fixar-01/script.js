// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Kiwi', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Caju', 'Abacaxi'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));