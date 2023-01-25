let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Crescente
let crescent = [];

for (let index = 0; index < numbers.length; index += 1) {
    for (let index2 = index + 1; index2 < numbers.length; index2 += 1) {
        if (numbers[index] > numbers[index2]) {
            let position = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = position;
            crescent[index] = numbers[index];
        }
    }
}

console.log(crescent);

// Decrescente
let decrescent = [];

for (let index = 0; index < numbers.length; index += 1) {
    for (let index2 = index + 1; index2 < numbers.length; index2 += 1) {
        if (numbers[index] < numbers[index2]) {
            let position = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = position;
            decrescent[index] = numbers[index];
        }
    }
}
console.log(decrescent);

