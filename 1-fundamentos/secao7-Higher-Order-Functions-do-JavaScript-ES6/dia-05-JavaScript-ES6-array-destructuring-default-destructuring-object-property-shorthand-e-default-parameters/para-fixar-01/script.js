//Item 01
const primeNumbers = [17, 23, 37];

const sum = (a, b) => {
  console.log(a + b);
};

sum(primeNumbers[0], primeNumbers[2]); // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstNum, secondNum, thirdNum] = primeNumbers;

sum(firstNum, thirdNum);

//Item 02
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = ['arroz', 'gato', 'agua'];

console.log(comida, animal, bebida);