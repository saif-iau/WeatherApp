import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { UserListService } from '../user-list.service';
import { userObject } from '../UserObject';
import { WeatherViewComponent } from '../weather-view/weather-view.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  userSet = new Set<userObject>();

  constructor(public dialog: MatDialog , private auth:AuthServiceService , private router:Router , private userservice:UserListService){

  }
  form = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  login(){
 

this.userservice.getUsers().subscribe(obj => {
      this.userSet = obj;
      console.log(obj);
 });
     let found = true;
      
      
        if(found){
     localStorage.setItem( 'mytoken','true');
     this.form.reset();
     this.dialog.closeAll;
     alert('welcome : ' + this.form.get('username')?.value);
    
//   this.router.navigate(['./WeatherView']);
   }
   else {
    localStorage.removeItem('mytoken');
    alert('cannot find user');
   }

 };

  
  

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '280px',
      
    })};
}
