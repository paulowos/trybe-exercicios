const fs = require('fs').promises;
const getData = require('./utils/getData');

const removeCharacter = async () => {
  const PATH = './simpsons.json';
  const data = await getData();
  const filter = data.filter(({ id }) => Number(id) !== 10 && Number(id) !== 6);
  await fs.writeFile(PATH, JSON.stringify(filter));
  console.log('Personagens Removidos');
};

const newFile = async () => {
  const PATH = './simpsonsFamily.json';
  const familyIds = [1, 2, 3, 4];
  const data = await getData();
  const filter = data.filter(({ id }) => familyIds.includes(Number(id)));
  await fs.writeFile(PATH, JSON.stringify(filter));
  console.log('Arquivo criados');
};

const addCharacter = async () => {
  const PATH = './simpsonsFamily.json';
  const data = JSON.parse(await fs.readFile(PATH));
  const character = { id: "8", name: 'Nelson Muntz' };
  const newList = [...data, character];
  await fs.writeFile(PATH, JSON.stringify(newList));
  console.log("Personagem adicionado");
};

const replaceCharacter = async () => {
  const PATH = './simpsonsFamily.json';
  const data = JSON.parse(await fs.readFile(PATH));
  const index = data.findIndex(({ id }) => id === '8');
  const character = { id: "5", name: 'Maggie Simpson' };
  data[index] = character;
  await fs.writeFile(PATH, JSON.stringify(data));
  console.log('Personagem alterado');
};

replaceCharacter()

