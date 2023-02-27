const myRemove = require('./1');

describe('testa a função myRemove', () => {
  test('verifica se um array retorna copia sem o elemento especificado', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove(array, 5)).toEqual(array);
  });

});