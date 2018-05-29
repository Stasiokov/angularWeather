import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import {SearchCityComponent} from './components/searchCity/searchCity.component';
import {TodayComponent} from './components/today/today.component';
import {ChartsComponent} from './components/charts/charts.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchCityComponent,
    TodayComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
