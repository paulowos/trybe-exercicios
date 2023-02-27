const { encode, decode } = require('./3');
describe('testa as funções encode e decode', () => {
  test('testa a função encode', () => {
    expect(encode).toBeDefined();
    expect(typeof encode).toBe('function');
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
    expect(encode('zrt')).toBe('zrt');
    expect(encode('olá').length).toBe(3);
  });

  test('testa a função decode', () => {
    expect(decode).toBeDefined();
    expect(typeof decode).toBe('function');
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
    expect(decode('zrt')).toBe('zrt');
    expect(decode('olá').length).toBe(3);
  });
});