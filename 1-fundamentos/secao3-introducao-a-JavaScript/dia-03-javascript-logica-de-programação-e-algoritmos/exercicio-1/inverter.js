let word = 'tryber';
let inverter = "";

for (let index = 0; index < word.length; index += 1) {
    inverter += (word[word.length - index - 1]);
}
console.log("Palavra invertida: " + inverter);