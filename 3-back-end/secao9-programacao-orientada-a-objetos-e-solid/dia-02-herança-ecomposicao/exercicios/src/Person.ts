export default class Person {
  private _name: string = '';
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }
  get name(): string {
    return this._name;
  }
  set name(newValue: string) {
    if (newValue.length < 3) {
      throw new Error('Nome deve ter no mínimo 3 caracteres');
    }
    this._name = newValue;
  }
  get birthDate(): Date {
    return this._birthDate;
  }
  set birthDate(newValue: Date) {
    if (newValue > this.birthDate)
      throw new Error('A data de nascimento não pode ser uma data no futuro');

    const age = new Date().getFullYear() - newValue.getFullYear();
    if (age > 120)
      throw new Error('A pessoa não pode possuir mais de 120 anos');

    this._birthDate = newValue;
  }
}
