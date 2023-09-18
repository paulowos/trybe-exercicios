import Person from './Person';
import crypto from 'node:crypto';

export default class Student extends Person {
  private _enrollment: string = this.generateEnrollment();
  private _examGrades: number[] = [];
  private _assignmentsGrade: number[] = [];
  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16)
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    this._enrollment = value;
  }

  get examGrades(): number[] {
    return this._examGrades;
  }

  set examGrades(value: number[]) {
    if (value.length > 4)
      throw new Error(
        'A pessoa estudante deve possuir no máximo 4 notas de provas'
      );
    this._examGrades = value;
  }
  get assignmentsGrade(): number[] {
    return this._assignmentsGrade;
  }
  set assignmentsGrade(value: number[]) {
    if (value.length > 2)
      throw new Error(
        'A pessoa estudante deve possuir no máximo 2 notas de trabalhos'
      );
    this._assignmentsGrade = value;
  }

  sumGrades(): number {
    return this.examGrades.reduce((acc, crr) => acc + crr, 0);
  }

  sumAverageGrade(): number {
    return this.sumGrades() / this.examGrades.length;
  }

  generateEnrollment(): string {
    const id = crypto.randomBytes(16).toString('hex');
    return id;
  }
}
