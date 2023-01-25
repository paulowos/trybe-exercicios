let idadeCarol = 25;
let idadeFlavio = 26;
let idadeNoel = 45;
const message = " é mais novo(a)";

if (idadeCarol < idadeFlavio && idadeCarol < idadeNoel) {
    console.log("Carol" + message);
}
else if (idadeFlavio < idadeCarol && idadeFlavio < idadeNoel) {
    console.log("Flavio" + message);
}
else {
    console.log("Noel" + message);
}