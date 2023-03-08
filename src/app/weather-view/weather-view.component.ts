import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
 
  constructor(private http:HttpClient , private service:WeatherService){
    service.refresh.subscribe(() => {
      this.getData(1,2);
  } )
  }
  ngOnInit(): void {
  
  }
 
  ELEMENT_DATA: WeatherObject[] = [
    {
      index: 1,
      temp: 23,
      city:'khobar'
    },
    {
      index: 1,
      temp: 23,
      city:'khobar'
    },
    {
      index: 1,
      temp: 23,
      city:'khobar'
    },
    {
      index: 1,
      temp: 23,
      city:'khobar'
    }
  ];
  
  
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['index' , 'city' , 'temp' , 'actions'];

   getData(lat:any , lng:any ){
   
    var url = 'https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lng+'1&hourly=temperature_2m';
  
    console.log(  this.http.get(url));
    this.jsonToClass(  this.http.get(url) );
     
   }

   jsonToClass(json:any){
    var len = this.WeatherSet.size+1;
    this.WeatherSet.add({
      index: len,
      temp:json['temperature'][0],
      city:'khobar',
    });

    console.log(this.WeatherSet);
   
   }


   
  

}
