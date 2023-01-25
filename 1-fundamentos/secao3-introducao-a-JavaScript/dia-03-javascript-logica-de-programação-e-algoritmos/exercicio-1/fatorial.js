let number = 10;
let fatorial = 1;
let index = number;

for (let index = number; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);