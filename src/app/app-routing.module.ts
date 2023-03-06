import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/guards/authguard.guard';
import { MapComponent } from './map/map.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';

const routes: Routes = [
  {
    path:'weatherView',
    component:WeatherViewComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'mapView',
    component:MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
