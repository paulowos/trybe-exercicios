const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseSplit = frase.split(' ');
    fraseSplit[1] = nome;
    return fraseSplit.join(" ");
};

const minhasSkills = (substituaX) => {
    const skills = ["JS", "HTML", "CSS"];
    let message = `${substituaX}`;

    for (let skill in skills) {
        message += ` 
- ${skills[skill]}`;
    }
    return message;

};

console.log(minhasSkills(substituaX("Paulo")));