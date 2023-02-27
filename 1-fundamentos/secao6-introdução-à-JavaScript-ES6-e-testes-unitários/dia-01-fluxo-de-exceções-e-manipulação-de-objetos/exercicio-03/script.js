const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addKey = (object, key, value) => {
    object[key] = value;
};

addKey(lesson2, 'turno', 'noite');

const listKeys = (object) => Object.keys(object);

const objectLength = (object) => listKeys(object).length;

const listValues = (object) => Object.values(object);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const studentsNumber = (object) => {
    let total = 0;

    const keys = listKeys(object);

    for (let index in keys) {
        total += object[keys[index]].numeroEstudantes;
    }

    return total;

};

const getValueByNumber = (object, index) => Object.values(object)[index];

const verifyPair = (object, key, value) => {
    const entries = Object.entries(object);
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) {
            return true;
        }

    }

    return false;
};

console.log(verifyPair(lesson2, 'turno', 'noite'));

// console.log(allLessons);

const studentsThatWatchedMathLessons = (lessons) => {
    const keys = listKeys(lessons);
    let total = 0;
    for (let index in keys) {
        if (lessons[keys[index]]['materia'] === 'Matemática') {
            total += lessons[keys[index]]['numeroEstudantes'];
        }
    }
    return total;
};

console.log(studentsThatWatchedMathLessons(allLessons));