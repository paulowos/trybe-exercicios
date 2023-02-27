const techList = (array, nome) => {
  const lista = [];
  if (array.length === 0) return 'Vazio!';
  array.sort();
  for (let index in array) {
    const object = {
      tech: array[index],
      name: nome,
    };
    lista.push(object);
  }
  return lista;

};

module.exports = techList;