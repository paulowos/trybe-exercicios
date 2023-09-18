import crypto from 'node:crypto';
import Person from './Person';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

const person1 = new Person('Paulo', new Date('1998/08/30'));
const person2 = new Person('João', new Date('1970/12/12'));

console.log(person1);
console.log(person2);

const student1 = new Student('Carlos', new Date('1998/12/12'));
const student2 = new Student('Maria', new Date('1991/04/30'));

student1.examGrades = [80, 80, 80, 80];
student1.assignmentsGrade = [30, 19];
console.log('Media: ', student1.sumAverageGrade());

console.log(student1);
console.log(student2);

const subject1 = new Subject('Matemática');
const subject2 = new Subject('História');
const subject3 = new Subject('Filosofia');

console.log(subject1);
console.log(subject2);
console.log(subject3);

const teacher1 = new Teacher('Joana', new Date('1965/06/24'), 2000, subject1);
const teacher2 = new Teacher('Arão', new Date('1955/05/10'), 3000, subject2);
const teacher3 = new Teacher('Silvia', new Date('1947/09/24'), 5000, subject3);

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
