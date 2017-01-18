export class Counter {
  constructor(label: string, amount:number) {
    this.label = label;
    this.amount = amount;
  }
  label: string;
  amount: number;
  count: number;

  sum() {
    if (this.count) {
      return this.amount * this.count;
    }

    return 0;
  }
}
