import { Component, OnInit } from '@angular/core';
import { Service, CountryInfo } from './model/CountryInfo';
import { ExcelServiceService } from './excel/excel-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  public countriesInfo: CountryInfo[];
  constructor(private service:Service, private excelService:ExcelServiceService){
    this.countriesInfo = service.getCountriesInfo();
  }
  ngOnInit(): void {
    
  }
  exportExcel(){
    this.excelService.exportAsExcelFile(this.countriesInfo, 'code-Android-Example.blogspot.com');
  }
}
