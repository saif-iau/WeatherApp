import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { WeatherObject } from '../WeatherObject';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {
  
  WeatherSet = new Set<WeatherObject>();

  constructor(private http:HttpClient){
   
  }
  ngOnInit(): void {
  
  }
  form = new FormGroup({
    lat: new FormControl('',Validators.required),
    lng: new FormControl('',Validators.required),
  });
  
  data1: WeatherObject[] = [];
  dataSource = this.data1;
  displayedColumns: string[] = ['index' , 'city' , 'temp' , 'actions'];

   getData(){
    let lat = this.form.get('lat')?.value;
    let lng = this.form.get('lng')?.value;
    var url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';
  
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
