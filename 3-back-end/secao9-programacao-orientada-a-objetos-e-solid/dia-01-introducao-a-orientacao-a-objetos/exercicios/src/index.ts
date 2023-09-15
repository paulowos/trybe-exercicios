import moment from 'moment';

class Student {
  constructor(
    private _name: string,
    private _registry: number,
    private _p1: number,
    private _p2: number,
    private _p3: number,
    private _p4: number,
    private _a1: number,
    private _a2: number
  ) {}

  getGradesSum(): number {
    return this._p1 + this._p2 + this._p3 + this._p4 + this._a1 + this._a2;
  }

  getAverage(): number {
    const sum = this.getGradesSum();
    return sum / 6;
  }
}

class Client {
  constructor(private _name: string) {}
}

class Item {
  constructor(private _name: string, private _price: number) {}

  get price() {
    return this._price;
  }
}

class Order {
  constructor(
    private _client: Client,
    private _itens: Item[],
    private _paymentMethod: string,
    private _discount?: number
  ) {}

  getTotalWithNoDiscount(): number {
    const total = this._itens.reduce((acc, crr) => acc + crr.price, 0);
    return total;
  }

  getTotalWithDiscount(): number {
    if (this._discount) {
      const total = this.getTotalWithNoDiscount();
      const discount = total * this._discount;
      return total - discount;
    } else {
      throw new Error("There's no discount");
    }
  }
}

class Data {
  private _day: number;
  private _month: number;
  private _year: number;
  private _fullDate: Date;
  constructor(date: Date) {
    if (date instanceof Date) {
      this._day = date.getDay();
      this._month = date.getMonth();
      this._year = date.getFullYear();
      this._fullDate = date;
    } else {
      this._day = 0o1;
      this._month = 0o1;
      this._year = 1900;
      this._fullDate = new Date(`${this._day}/${this._month}/${this._year}`);
    }
  }

  getMonthName(): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[this._month];
  }

  isLeapYear(): boolean {
    return this._year % 100 === 0
      ? this._year % 400 === 0
      : this._year % 4 === 0;
  }

  compare(dateToCompare: Date): number {
    if (dateToCompare === this._fullDate) return 0;
    if (dateToCompare > this._fullDate) return 1;
    else return -1;
  }

  format(format: string): string {
    const result = moment(this._fullDate).format(format);
    return result;
  }
}

const now = new Date();

const date = new Data(now);

console.log(date.format('DD, MM of YYYY'));
