const rl = require('readline-sync');
const fibonacci = (limit) => {

  if (limit <= 0) throw new Error('Limite tem que ser maior que 0');

  const fibArray = [];
  for (let i = 1; i < limit; i += 1) {
    if (i <= 1) {
      fibArray.push(i);
      fibArray.push(i);
    } else {
      const nextFib = fibArray[i - 1] + fibArray[i - 2];
      fibArray.push(nextFib);
    }
  }
  return fibArray;
};

try {

  const limit = rl.questionInt('Digite o limite ');

  console.log(fibonacci(limit));
} catch (err) {
  console.log(err.message);
}
