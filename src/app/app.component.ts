import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';

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
  countryCodesList: string[] = [];

  exchangedAmount: number = 0;

  constructor(private currencyApi: CurrencyApiService){
    console.log('Constructor Called');
  }

  updateData(data: any){
    this.data = cloneDeep(<currencyData>data);
    this.rates = this.data.rates;
    console.log(this.data);
  }

  ngOnInit(){
    console.log(this.data);
    this.currencyApi.initCountryCodes().subscribe(data => {
      if(data){
        this.updateData(data);
        this.getCountryCodes();
      }
    });
  }
  
  getCountryCodes(){

    // Run after data has been set
    const codes = Object.keys(this.rates);
    codes.push('USD');
    this.countryCodesList = cloneDeep(codes);
    console.log(this.countryCodesList);
  }

  fetchCurrencyData(currency1: string, currency2: string){
    this.currencyApi.lookupExchange(currency1, currency2).subscribe(data => {
      if(data){
        this.updateData(data);
        this.getExchange(currency2, 1);
      }
    });
  }

  getExchange(currency2: string, amount: number){
    var exchangeRate = this.data.rates[currency2];
    var newAmount = amount*exchangeRate;
    this.exchangedAmount = cloneDeep(newAmount);
  }

  fetchAllRates(currency: string){
    this.currencyApi.fetchCurrencyRates(currency).subscribe(data => {
      if(data){
        this.updateData(data);
      }
    });
  }

  fetchAmountConversion(currency1: string, currency2: string, amount: number){
    this.currencyApi.convertAmount(currency1, currency2, amount).subscribe(data => {
      if(data){
        this.updateData(data);
        this.getExchange(currency2, amount);
      }
    });
  }

}
