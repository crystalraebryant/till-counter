import {Component, OnInit} from "@angular/core";
import {CurrencyCounter} from "./currencyCounter";
import {Counter} from "./counter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  total: number = 0;
  currentCurrency = "USD";
  currencies: string[];
  counter: CurrencyCounter;

  ngOnInit(): void {
    this.currencies = this.getList();
    this.counter = this.getCounter(this.currentCurrency);
  }

  setCurrentCurrency(code: string): void {
    this.currentCurrency = code;
    this.total = 0;
    this.resetAmounts();
    this.counter = this.getCounter(this.currentCurrency);
  }

  resetAmounts(): void {
    for (let bill of this.counter.bills) {
      bill.count = null;
    }
    for (let coin of this.counter.coins) {
      coin.count = null;
    }
    this.total = 0;
  }

  calculateTotal(): void {
    this.total = 0;
    for (let bill of this.counter.bills) {
      this.total += bill.sum();
    }
    for (let coin of this.counter.coins) {
      this.total += coin.sum();
    }
  }

  private getCounter(code: string) {
    switch (code) {
      case "USD":
        return USD;
      case "CRC":
        return CRC;
      case "GBP":
        return GBP;
      case "AUD":
        return AUD;
      case "CAD":
        return CAD;
    }
  }

  private getList() {
    return ["AUD", "CAD", "CRC", "GBP", "USD"];
  }
}

// USD Definitions
const usdBills: Counter[] = [
  new Counter("$100", 100),
  new Counter("$50", 50),
  new Counter("$20", 20),
  new Counter("$10", 10),
  new Counter("$5", 5),
  new Counter("$2", 2),
  new Counter("$1", 1)];
const usdCoins: Counter[] = [
  new Counter("$1", 1),
  new Counter("50¢", .5),
  new Counter("25¢", .25),
  new Counter("10¢", .10),
  new Counter("5¢", .05),
  new Counter("1¢", .01)];
const USD: CurrencyCounter = new CurrencyCounter(usdBills, usdCoins, '1.2-2');

// CAD Definitions
const cadBills: Counter[] = [
  new Counter("$100", 100),
  new Counter("$50", 50),
  new Counter("$20", 20),
  new Counter("$10", 10),
  new Counter("$5", 5)];
const cadCoins: Counter[] = [
  new Counter("$2", 2),
  new Counter("$1", 1),
  new Counter("50¢", .50),
  new Counter("25¢", .25),
  new Counter("10¢", .10),
  new Counter("5¢", .05),
  new Counter("1¢", .01)];
const CAD: CurrencyCounter = new CurrencyCounter(cadBills, cadCoins, '1.2-2');

// AUD Definitions
const audBills: Counter[] = [
  new Counter("$100", 100),
  new Counter("$50", 50),
  new Counter("$20", 20),
  new Counter("$10", 10),
  new Counter("$5", 5),
  new Counter("$2", 2)];
const audCoins: Counter[] = [
  new Counter("$2", 2),
  new Counter("$1", 1),
  new Counter("50¢", .5),
  new Counter("20¢", .20),
  new Counter("10¢", .10),
  new Counter("5¢", .05)];
const AUD: CurrencyCounter = new CurrencyCounter(audBills, audCoins, '1.2-2');

// CRC Definitions
const crcBills: Counter[] = [
  new Counter("₡50000", 50000),
  new Counter("₡20000", 20000),
  new Counter("₡10000", 10000),
  new Counter("₡5000", 5000),
  new Counter("₡2000", 2000),
  new Counter("₡1000", 1000)
];
const crcCoins: Counter[] = [
  new Counter("₡500", 500),
  new Counter("₡100", 100),
  new Counter("₡50", 50),
  new Counter("₡25", 25),
  new Counter("₡10", 10),
  new Counter("₡5", 5)
];
const CRC: CurrencyCounter = new CurrencyCounter(crcBills, crcCoins, '1.0-0');

// GBP Definitions
const gbpBills: Counter[] = [
  new Counter("£100", 100),
  new Counter("£20", 20),
  new Counter("£5", 5),
  new Counter("£2", 2),
  new Counter("£1", 1)
];
const gbpCoins: Counter[] = [
  new Counter("£1", 1),
  new Counter("50p", .50),
  new Counter("25p", .25),
  new Counter("20p", .20),
  new Counter("10p", .10),
  new Counter("5p", .05),
  new Counter("2p", .02),
  new Counter("1p", .01)
];
const GBP: CurrencyCounter = new CurrencyCounter(gbpBills, gbpCoins, '1.2-2');
