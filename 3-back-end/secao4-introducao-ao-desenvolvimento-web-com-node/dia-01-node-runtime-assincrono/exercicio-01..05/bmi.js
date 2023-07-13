const rl = require('readline-sync');

const bmi = () => {
  const weight = rl.questionFloat("What's your weight? (kg) ");
  const height = rl.questionInt("What's your height? (cm) ") / 100;

  const result = +(weight / (height * height)).toFixed(2);

  if (result < 18.5) return `${result}, Abaixo do peso (magreza)`;
  if (result <= 24.9) return `${result}, Peso normal`;
  if (result <= 29.9) return `${result}, Acima do peso (sobrepeso)`;
  if (result <= 34.9) return `${result}, Obesidade grau I`;
  if (result <= 39.9) return `${result}, Obesidade grau II`;
  return `${result}, Obesidade grau III e IV`;
};

console.log(bmi());