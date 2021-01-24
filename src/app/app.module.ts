import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrentExchangeComponent } from './current-exchange/current-exchange.component';
import { AllExchangeComponent } from './all-exchange/all-exchange.component';
import { HistoricConversionComponent } from './historic-conversion/historic-conversion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrentExchangeComponent,
    AllExchangeComponent,
    HistoricConversionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
