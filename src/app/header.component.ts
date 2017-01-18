import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {CurrencyCounter} from "./currencyCounter";
import {Counter} from "./counter";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./app.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('currentCurrency') currentCurrency: string;
  @Input() currencyFormat: string;
  @Input() total: number;
  @Output() onChangedCurrency = new EventEmitter<string>();

  currencies: string[];

  ngOnInit(): void {
    this.currencies = this.getList();
  }

  setCurrentCurrency(code: string): void {
    this.currentCurrency = code;
    this.onChangedCurrency.emit(code);
  }

  private getList() {
    return ["AUD", "CAD", "CRC", "GBP", "USD"];
  }
}
