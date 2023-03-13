import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
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
    this.adminLogin();
 
this.userservice.getUsers().subscribe(obj => {
      this.userSet = obj;
     
 });
     let found = false;
      this.userSet.forEach( (x) => {
          if(x.username == this.form.get('username')?.value && x.password == this.form.get('password')?.value  ){
            found = true;
            console.log('found it');

          }
          else {
            found = false;
            console.log('user doesnt exist');
          }
      });

        if(found){
     localStorage.setItem( 'mytoken','true');
     this.form.reset();
     this.userservice.closeDialog.next(true);
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


    adminLogin(){
     if(this.loggedIn()){
      return;
     }
      if(this.form.get('username')?.value == environment.Admin && this.form.get('password')?.value == environment.pass ){
        localStorage.setItem('myrole' , 'admin');
        localStorage.setItem( 'mytoken','true');
        alert('welcome admin : '+this.form.get('username')?.value );
     }
  
    }

    loggedIn(): Boolean{
     if (localStorage.getItem('mytoken') == 'true'){
        alert('You are aleady logged in !')
        return true
   }
   else {
    return false;
   }
    }
}
