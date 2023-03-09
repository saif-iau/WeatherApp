import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import { CityData } from 'src/models/city.model';
import { WeatherData } from 'src/models/weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-addweather',
  templateUrl: './addweather.component.html',
  styleUrls: ['./addweather.component.scss']
})
export class AddweatherComponent {
constructor(private service: WeatherService, private http: HttpClient){

}
  Temp!: number;
  city!:string;
form = new FormGroup({
  lat: new FormControl('',Validators.required),
  lng: new FormControl('',Validators.required),
});

 // API call
 addData(){
  let lat = this.form.get('lat')?.value;
  let lng = this.form.get('lng')?.value;


let cityAPI = this.http.get<CityData>('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+lat+'&longitude='+lng+'&localityLanguage=en')
.subscribe((obj) => {
   this.city = obj.city;
  console.log("city : " + obj.city);
  
});


let tempAPI = this.http.get<WeatherData>('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lng+'&hourly=temperature_2m')
.subscribe((obj) => {
  let res = obj.hourly.temperature_2m[1];
  this.Temp = res
  console.log("temperature : " + res);
})
    
 
  this.service.setCity(this.city);
  this.service.setTemp(this.Temp);  

   this.service.refresh.next(true);
}


}
