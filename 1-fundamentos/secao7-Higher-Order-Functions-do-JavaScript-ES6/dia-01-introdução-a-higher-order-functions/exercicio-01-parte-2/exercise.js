const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1921,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//Item 1:
// const expectedResult = 'Stephen King';
const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name;
console.log(authorBornIn1947());

//Item 2:
// const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((element) => {

    if (!nameBook || element.name.length < nameBook.length) nameBook = element.name;
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};
console.log(smallerName());

//Item 3:
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

const getNamedBook = () => books.find((element) => element.name.length === 26);
console.log(getNamedBook());

//Item 4:
// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((element) => element.author.birthYear > 1900);
}

console.log(everyoneWasBornOnSecXX());

//Item 5:
// const expectedResult = true;

const someBookWasReleaseOnThe80s = () => books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990);

console.log(someBookWasReleaseOnThe80s());

//Item 6:
// const expectedResult = false;

const authorUnique = () => {
  return books.every((element) =>
    !books.some((element2) =>
      (element.author.birthYear === element2.author.birthYear) && element.author.name !== element2.author.name
    )
  );
};

console.log(authorUnique());
