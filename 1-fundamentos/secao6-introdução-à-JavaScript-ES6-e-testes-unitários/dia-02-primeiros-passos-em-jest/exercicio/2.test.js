const myFizzBuzz = require('./2');

describe('testa a função myFizzBuzz', () => {
  test('verifica se a saida é correta segundo o parametro', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(13)).toBe(13);
    expect(myFizzBuzz('ola')).toBe(false);
  });
});