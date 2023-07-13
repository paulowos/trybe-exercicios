const main = (a, b, c) => new Promise((resolve, reject) => {
  if (
    typeof a !== 'number'
    || typeof b !== 'number'
    || typeof c !== 'number'
  ) reject(new Error('Informe apenas números'));

  const result = ((a + b) * c);

  if (result < 50) reject(new Error('Valor muito baixo'));

  resolve(result);
});

main(30, 20, 1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));