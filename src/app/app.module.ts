import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HighchartComponent } from './highchart/highchart.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

//highchart
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import { HighchartFirstComponent } from './highchart-first/highchart-first.component';
import { HighchartSecondComponent } from './highchart-second/highchart-second.component';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}




@NgModule({
  declarations: [
    AppComponent,
    HighchartComponent,
    HighchartFirstComponent,
    HighchartSecondComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule

  ],
  providers: [
  	{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
