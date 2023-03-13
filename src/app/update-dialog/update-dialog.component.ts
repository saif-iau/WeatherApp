import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WeatherData } from 'src/models/weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {
constructor(private dialog: MatDialogRef<UpdateDialogComponent> , private service: WeatherService){

}
form = new FormGroup({
  city: new FormControl('',Validators.required),
  temp: new FormControl('',Validators.required),
});

update(){
  let x = [];
  x[0] = this.form.get('city')?.value;
  x[1] = this.form.get('temp')?.value;

  this.dialog.close(x);

 
 
}


}
