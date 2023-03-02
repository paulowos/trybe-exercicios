const generateWinnerNumber = () => Math.floor(Math.random() * 5);

const verifyWinner = (bet) => bet !== generateWinnerNumber() ? 'Tente Novamente' : 'Parabéns, você ganhou!';

console.log(verifyWinner(2));