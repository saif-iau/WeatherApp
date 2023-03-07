import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent {
constructor(public dialog: MatDialog){

}

openLoginDialog(): void {
  const dialogRef = this.dialog.open(UserDialogComponent, {
    width: '280px',
    closeOnNavigation:true
  });
  
};



}
