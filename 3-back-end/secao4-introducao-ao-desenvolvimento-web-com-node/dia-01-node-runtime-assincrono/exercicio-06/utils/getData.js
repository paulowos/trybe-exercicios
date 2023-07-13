const fs = require('fs').promises;
const getData = async () => {
  const data = JSON.parse(await fs.readFile('./simpsons.json'));
  return data;
};

module.exports = getData;