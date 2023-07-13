const rl = require('readline-sync');
const getData = require('./utils/getData');

const listCharacters = async (array) => {
  const data = array || await getData();
  data.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
};

const listCharacterById = () => new Promise(async (resolve, reject) => {
  const idPrompt = rl.questionInt('ID do personagem ');
  const data = await getData();
  const filteredData = data.filter(({ id }) => Number(id) === idPrompt);
  if (!filteredData.length) reject(new Error('ID não encontrado'));
  resolve(filteredData);
});

listCharacterById()
  .then((res) => {
    listCharacters(res);
  })
  .catch((err) => console.log(err.message));