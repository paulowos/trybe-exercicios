let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
    let evens = [];
    for (let index = 0; index < vector.length; index += 1) {
        for (let index2 = 0; index2 < vector[index].length; index2 += 1) {
            if (vector[index][index2] % 2 === 0) {
                evens.push(vector[index][index2]);
            }
        }
    }
    return evens;
}

console.log(arrayOfNumbers(vector));