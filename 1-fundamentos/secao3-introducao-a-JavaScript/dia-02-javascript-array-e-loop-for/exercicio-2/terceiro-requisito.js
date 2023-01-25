let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let times = [];
let mult = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if ((index + 1) >= numbers.length) {
        mult = numbers[index] * 2;
        times.push(mult);
    }
    else {
        mult = numbers[index] * numbers[index + 1];
        times.push(mult);
    }
}
console.log(times);
