import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { map } from 'rxjs';
import { AddweatherComponent } from '../addweather/addweather.component';
import { WeatherService } from '../weather.service';
import { WeatherObject } from '../WeatherObject';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {
  
  WeatherSet = new Set<WeatherObject>();
 
  constructor(private http:HttpClient , private service:WeatherService , ){
    service.refresh.subscribe(() => {
      this.InsertData();
  } )

  
  }
  ngOnInit(): void {
  
  }
  @ViewChild(MatTable) table!: MatTable<WeatherObject>;
   city!:string;
   temp!:number;
  ELEMENT_DATA: WeatherObject[] = [
    {
      index: 1,
      temp: 23,
      city:'jeddah'
    },
   
  ];
  
  
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['index' , 'city' , 'temp' , 'actions'];

   
  InsertData(){

  let city = this.service.getCity().subscribe((obj) => {
    this.city = obj;
  })

  let temp = this.service.getTemp().subscribe((obj) => {
    this.temp = obj;
  })

  if(this.city != undefined){
    this.ELEMENT_DATA.push({
      index:this.ELEMENT_DATA.length + 1,
      city: this.city+'',
      temp: this.temp,
     });
  }

    this.table.renderRows();
    
   console.log(this.dataSource);
  }
  


   
  

}
