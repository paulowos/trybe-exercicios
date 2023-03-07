const sum = (...args) => args.reduce((acc, crr) => acc + crr, 0);

console.log(sum(4, 5, 6));