import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

interface currencyData {
  base: string,
  date: Date,
  rates: any
}

@Component({
  selector: 'app-current-exchange',
  templateUrl: './current-exchange.component.html',
  styleUrls: ['./current-exchange.component.css']
})
export class CurrentExchangeComponent {

  @Input() data!: currencyData;
  @Output() respMsg = new EventEmitter<string>(); 

  countryCodes: string[] = [];
  selectedCurrency: any = '';
  filteredResults!: string[];
  currency1Amount: number = 0;
  currency2Amount: number = 0;
  selectedSource: string = 'USD';
  selectedTarget: string = 'USD';

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === 'data' && this.data) {
        this.selectedSource = this.data.base;
        this.getCountryCodes();
        this.filterCurrency();
        this.valueChange();
      }
     }
  }

  getExchange(currency2: string, amount: number){
    if(this.data){
      var exchangeRate = this.data.rates[currency2];
      var newAmount = amount*exchangeRate;
      this.currency2Amount = newAmount;
    }
  }

  getCountryCodes(){

    // Run after data has been set
    this.countryCodes = Object.keys(this.data.rates);
    this.countryCodes.push('USD');
  }

  filterCurrency() {
    this.filteredResults = this.countryCodes.filter(
      item => item.toLowerCase().includes(this.selectedCurrency.toLowerCase())
    );
  }

  clear(){
    this.selectedCurrency = "";
    this.filteredResults = this.countryCodes;
  }

  // Case of fetching the data again
  baseChange(){
    this.respMsg.emit(this.selectedSource);
  }

  // Case of changing the exchange values
  valueChange(){
    if(this.currency1Amount){
      this.getExchange(this.selectedTarget, this.currency1Amount);
    } else {
      this.currency2Amount = 0;
    }
  }

}
