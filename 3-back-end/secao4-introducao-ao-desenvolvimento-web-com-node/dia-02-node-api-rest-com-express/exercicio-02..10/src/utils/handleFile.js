const fs = require('fs/promises');

const PATH = '/home/paulowos/Trybe/exercises/trybe-exercicios/3-back-end/secao4-introducao-ao-desenvolvimento-web-com-node/dia-02-node-api-rest-com-express/exercicio-02..09/src/movies.json';

// console.log(__dirname);

const readFile = async () => {
  const data = JSON.parse(await fs.readFile(PATH));
  return data;
};

const writeFile = async (newMovie) => {
  const data = await readFile();
  const newID = data.reduce((max, { id }) => id > max ? id : max, 0) + 1;
  const newMovieWithId = { id: newID, ...newMovie };
  const newData = JSON.stringify([...data, newMovieWithId]);
  await fs.writeFile(PATH, newData);
  return newMovieWithId;
};

const updateFile = async (id, update) => {
  const data = await readFile();
  let updated = undefined;
  const newData = data.reduce((agg, crr) => {
    if (crr.id === Number(id)) {
      updated = { ...crr, ...update };
      return [...agg, updated];
    };
    return [...agg, { ...crr }];
  }, []);
  await fs.writeFile(PATH, JSON.stringify(newData));
  return updated;
};

const deleteData = async (id) => {
  const data = await readFile();
  const newData = data.filter((movie) => movie.id !== Number(id));
  if (newData.length === data.length) return false;
  await fs.writeFile(PATH, JSON.stringify(newData));
  return true;
};


module.exports = { readFile, writeFile, updateFile, deleteData };