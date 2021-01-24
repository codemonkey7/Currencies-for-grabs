import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';

import { CurrencyApiService } from './currency-api.service';

// Not entirely used interface, need to fix
interface rateData {
  id: string,
  exchangeRate: number
}

interface currencyData {
  base: string,
  date: Date,
  rates: rateData[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Currencies for grabs';

  data!: currencyData;

  // This is redundant
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
      }
    });
  }

  fetchCurrencyData(currency1: string, currency2: string){
    this.currencyApi.lookupExchange(currency1, currency2).subscribe(data => {
      if(data){
        this.updateData(data);
      }
    });
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
      }
    });
  }

  processMsg(currency : string){
    console.log(currency);
    this.fetchAllRates(currency);
  }

}
