import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MapComponent } from './map/map.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { AuthguardGuard } from 'src/guards/authguard.guard';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AddweatherComponent } from './addweather/addweather.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapComponent,
    UserDialogComponent,
    WeatherViewComponent,
    RegisterDialogComponent,
    AddweatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonToggleModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent , AuthguardGuard]
})
export class AppModule { }
