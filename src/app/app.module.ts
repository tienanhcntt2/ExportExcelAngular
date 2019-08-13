import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service } from './model/CountryInfo';
import { ExcelServiceService } from './excel/excel-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Service,ExcelServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
