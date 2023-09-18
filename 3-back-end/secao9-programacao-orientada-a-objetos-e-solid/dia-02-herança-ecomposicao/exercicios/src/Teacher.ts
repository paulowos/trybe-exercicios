import crypto from 'node:crypto';
import Person from './Person';
import Subject from './Subject';
import Employee from './interfaces/Employee';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _salary: number = 0;
  private _registration: string = '';
  private _admissionDate: Date = new Date();

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    this.salary = salary;
    this.registration = this.generateRegistration();
  }

  get subject() {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo');
    this._salary = value;
  }

  get registration() {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16)
      throw new Error('O registro deve possuir no mínimo 16 caracteres');
    this._registration = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value > new Date())
      throw new Error('A data de admissão não pode ser no futuro');
    this._admissionDate = value;
  }

  generateRegistration(): string {
    return crypto.randomBytes(16).toString('hex');
  }
}
