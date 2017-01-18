/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {HeaderComponent} from "./header.component";
import {FormsModule} from "@angular/forms";

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let header: HeaderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        FormsModule
      ],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    header = fixture.componentInstance;

    header.currentCurrency = 'USD';
    header.currencyFormat = '1.2-2';
    header.total = 0;
    fixture.detectChanges();
  });

  it(`should display a refresh button`, async(() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.reset')).toBeTruthy();
  }));

  it(`should initially display $0.00 for total`, async(() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.total h1').innerHTML).toEqual('$0.00');
  }));

  it(`should update total`, async(() => {
    header.total = 1244.2;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.total h1').innerHTML).toEqual('$1,244.20');
  }));

  it(`should have a list of currency codes`, async(() => {
    header.ngOnInit();
    expect(header.currencies).toEqual(["AUD", "CAD", "CRC", "GBP", "USD"]);
  }));

  it(`should display a list of currency codes`, async(() => {
    header.ngOnInit();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.change-currency select option').length).toEqual(5);
  }));
});
