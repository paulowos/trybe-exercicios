const fs = require('fs').promises;
const { join } = require('path');

const path = '/data/cacauTrybeData.json';
const file = join(__dirname, path);
const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(file, 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};


const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getTotal = async () => {
  const cacauTrybe = await getAllChocolates();
  return cacauTrybe.length;
};

const getChocolatesByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));
};

const updateChocolateById = async (id, body) => {
  const cacauTrybe = await readCacauTrybeFile();
  const index = cacauTrybe.chocolates
    .findIndex((chocolate) => chocolate.id === id);

  if (index < 0) return null;

  cacauTrybe.chocolates[index] = { ...cacauTrybe.chocolates[index], ...body };
  await fs.writeFile(file, JSON.stringify(cacauTrybe));

  return cacauTrybe.chocolates[index];
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getTotal,
  getChocolatesByName,
  updateChocolateById
};