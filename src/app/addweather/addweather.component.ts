import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
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

form = new FormGroup({
  lat: new FormControl('',Validators.required),
  lng: new FormControl('',Validators.required),
});


 addData(){
  

   this.service.refresh.next(true);
}


}
