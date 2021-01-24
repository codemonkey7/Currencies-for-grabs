import { Component } from '@angular/core';

import { CurrencyApiService } from './currency-api.service';

interface currencyData {
  base: string,
  date: Date,
  rates: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Currencies for grabs';

  data!: currencyData;
  rates: any;
  countryCodes: string[] = [];

  constructor(private currencyApi: CurrencyApiService){
    console.log('Constructor Called');
  }

  ngOnInit(){
    this.currencyApi.initCountryCodes().subscribe(data => {
      if(data){
        this.data = <currencyData>data;
        console.log(data);
        this.getCountryCodes();
      }
    });
  }
  
  getCountryCodes(){

    // Run after data has been set
    this.countryCodes = Object.keys(this.data.rates);
    this.countryCodes.push('USD');
    console.log(this.countryCodes);
  }

  fetchCurrencyData(currency1: string, currency2: string){
    this.currencyApi.lookupExchange(currency1, currency2).subscribe(data => {
      if(data){
        this.data = <currencyData>data;
        console.log(data);
        this.getExchange(currency2, 1);
      }
    });
  }

  getExchange(currency2: string, amount: number){
    var exchangeRate = this.data.rates[currency2];
    return amount*exchangeRate;
  }

  fetchAllRates(currency: string){
    this.currencyApi.fetchCurrencyRates(currency).subscribe(data => {
      if(data){
        this.data = <currencyData>data;
        console.log(data);
        this.rates = this.data.rates;
      }
    });
  }

  fetchAmountConversion(currency1: string, currency2: string, amount: number){
    this.currencyApi.convertAmount(currency1, currency2, amount).subscribe(data => {
      if(data){
        this.data = <currencyData>data;
        console.log(data);
        this.getExchange(currency2, amount);
      }
    });
  }

}
