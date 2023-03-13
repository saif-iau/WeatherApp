import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
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
 async addData(){
  let lat = this.form.get('lat')?.value;
  let lng = this.form.get('lng')?.value;


let cityAPI = await lastValueFrom( this.http.get<CityData>('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+lat+'&longitude='+lng+'&localityLanguage=en'));
let tempAPI = await lastValueFrom(this.http.get<WeatherData>('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lng+'&hourly=temperature_2m'));
    
  this.city = cityAPI.city;
  let len = tempAPI.hourly.temperature_2m.length / 2;
  this.Temp = tempAPI.hourly.temperature_2m[len];
  this.service.setCity(this.city);
  this.service.setTemp(this.Temp);  

   this.service.refresh.next(true);
}


}
