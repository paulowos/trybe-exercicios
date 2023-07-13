const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';


const main = async () => {
  try {
    const data = await fs.readFile(nomeDoArquivo, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
};

main();