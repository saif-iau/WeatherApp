import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WeatherData } from 'src/models/weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {
constructor(public dialog: MatDialog , private service: WeatherService){

}
form = new FormGroup({
  city: new FormControl('',Validators.required),
  temp: new FormControl('',Validators.required),
});

update(){
 this.service.setupdatecity(this.form.get('city')?.value);
 this.service.setupdatetemp(this.form.get('temp')?.value);
  this.dialog.closeAll();
 
}


}
