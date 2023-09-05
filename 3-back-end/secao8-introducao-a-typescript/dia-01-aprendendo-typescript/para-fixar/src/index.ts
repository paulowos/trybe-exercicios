import * as Fuctions from './myFunctions';
import users from './data';

console.log(
  `Lista de pessoas usuárias do GitHub: ${Fuctions.getUsersName(users)}.`
);

console.log(
  `Pessoas com pelo menos 20 repositórios: ${Fuctions.getUsersByRepoQuantity(
    users,
    20
  )}`
);

console.log(
  `Essa é a conta mais ativa da lista? ${Fuctions.itsMostActiveUser(
    'João Paulo Aramuni',
    users
  )}`
);
