import { Component, ChangeDetectionStrategy, Inject ,Renderer2, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  ngOnInit() {
    this.initializeTheme();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver , public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document , private renderer:Renderer2
    ) {}


  openLoginDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '280px',
      
    })};
    openRegisterDialog(): void {
      const dialogRef = this.dialog.open(RegisterDialogComponent, {
        width: '280px',
        
      })};

    
      theme: theme = 'light-theme';

      switchTheme() {
        this.document.body.classList.replace(
          this.theme,
          this.theme === 'light-theme'
            ? (this.theme = 'dark-theme')
            : (this.theme = 'light-theme')
        );
      }
    
      initializeTheme = (): void =>
        this.renderer.addClass(this.document.body, this.theme);
  
}
export type theme = 'light-theme' | 'dark-theme';