const hydrate = (string) => {
  const stringSplit = string.split('');
  let total = 0;
  for (let index in stringSplit) {
    if (Number(stringSplit[index])) {
      total += Number(stringSplit[index]);
    }
  }

  if (total === 1) return `${total} copo de água`;
  return `${total} copos de água`;

};

module.exports = hydrate;