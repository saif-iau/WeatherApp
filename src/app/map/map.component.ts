import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  lat!:number;
  lng!:number;
  zoom = 2;
  constructor( @Inject(DOCUMENT) private document: Document){
  }



  mapClicked(lat:any , lng:any){
 alert(lat);
  }
  
 

  hide(): Boolean{
    if(localStorage.getItem('mytoken')){
      return true;
    }
    else {
      return false;
    }
    }


}

