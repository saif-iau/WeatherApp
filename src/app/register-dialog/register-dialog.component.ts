import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { UserListService } from '../user-list.service';
import { userObject } from '../UserObject';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent {
constructor(public dialog: MatDialog , private service:UserListService){

}
userSet = new Set<userObject>();

form = new FormGroup({
  username: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
});

register(){
  if(this.form.get('username')?.value?.length != 0 || this.form.get('password')?.value?.length != 0 ){
    this.userSet.add({
      username:this.form.get('username')?.value!,
      password:this.form.get('password')?.value!,
      type:'user',
    });
   this.service.setUsers(this.userSet);
   console.log(this.userSet);
   alert('You are registered, welcome : ' + this.form.get('username')?.value);
   this.service.closeDialog.next(true);
  }
}

openLoginDialog(): void {
  const dialogRef = this.dialog.open(UserDialogComponent, {
    width: '280px',
    closeOnNavigation:true
  });

};

closeDialog(){
  this.dialog.closeAll;
}



}
