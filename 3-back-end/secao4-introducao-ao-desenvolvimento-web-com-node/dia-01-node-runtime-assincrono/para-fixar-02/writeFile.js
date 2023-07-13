const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';


async function main() {
  try {
    await fs.writeFile(nomeDoArquivo, ' Meu texto', { flag: 'a' });
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();