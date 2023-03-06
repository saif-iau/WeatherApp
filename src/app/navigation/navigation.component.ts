import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver , public dialog: MatDialog) {}


  openLoginDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '280px',
      
    })};
    openRegisterDialog(): void {
      const dialogRef = this.dialog.open(RegisterDialogComponent, {
        width: '280px',
        
      })};

    closeDialog(): void {
      const dialogRef = this.dialog.closeAll;
    }


  
}
