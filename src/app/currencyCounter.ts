import {Counter} from "./counter";
export class CurrencyCounter {
  constructor(bills:Counter[], coins:Counter[], format: string) {
    this.bills = bills;
    this.coins = coins;
    this.format = format;
  }

  bills:Counter[];
  coins:Counter[];
  format: string;
}
