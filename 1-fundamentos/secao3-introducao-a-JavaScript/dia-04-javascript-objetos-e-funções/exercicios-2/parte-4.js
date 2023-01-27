let moradores = {
    blocoUm: [
        {
            nome: 'Luiza',
            sobrenome: 'Guimarães',
            andar: 10,
            apartamento: 1005,
        },
        {
            nome: 'William',
            sobrenome: 'Albuquerque',
            andar: 5,
            apartamento: 502,
        },
    ],
    blocoDois: [
        {
            nome: 'Murilo',
            sobrenome: 'Ferraz',
            andar: 8,
            apartamento: 804,
        },
        {
            nome: 'Zoey',
            sobrenome: 'Brooks',
            andar: 1,
            apartamento: 101,
        },
    ],
};

console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}`);


// O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101

for (let bloco in moradores) {
    // console.log(moradores[bloco]);
    for (let array in moradores[bloco]) {
        // console.log(moradores[bloco][array]);
        console.log(`${moradores[bloco][array]["nome"]} ${moradores[bloco][array]["sobrenome"]}`);
    }
}
