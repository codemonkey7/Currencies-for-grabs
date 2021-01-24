import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  url = 'https://api.currencyfreaks.com/latest?apikey=6393dea387db495c920350356a336e44';

  constructor(private http:HttpClient) { }

  initCountryCodes(){
    return this.http.get(this.url);
  }

  lookupExchange(currency1: string, currency2: string){
    // would have been better to use this
    // this.convertAmount(currency1, currency2, 1);

    return this.fetchCurrencyRates(currency1);
  }

  // &base=EUR
  fetchCurrencyRates(currency: string){
    return this.http.get(this.url + '&base=' + currency);
  }

  // &from=USD&to=PKR&amount=500
  convertAmount(currency1: string, currency2: string, amount: number){
    // would have been better to use this
    // this.http.get(this.url + '&from=' + currency1 + '&to=' + currency2 + '&amount' + amount);

    return this.fetchCurrencyRates(currency1);
  }

}
