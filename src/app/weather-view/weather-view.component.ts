import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { WeatherService } from '../weather.service';
import { WeatherObject } from '../WeatherObject';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {

  WeatherSet = new Set<WeatherObject>();

  constructor(private http:HttpClient , private service:WeatherService ,public dialog: MatDialog ){
    service.refresh.subscribe(() => {
      this.InsertData();
      service.reindex.subscribe(() => {
        this.reindex();
      })
  } )


  }
  ngOnInit(): void {
   this.table.renderRows();
  }
  @ViewChild(MatTable) table!: MatTable<WeatherObject>;
   city!:string;
   temp!:number;
   updatecity!:string;
   updatetemp!:number;
   ELEMENT_DATA: WeatherObject[] = [];

  

  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['index' , 'city' , 'temp' , 'actions'];


  InsertData(){

  let city = this.service.getCity().subscribe((obj) => {
    this.city = obj;
  })

  let temp = this.service.getTemp().subscribe((obj) => {
    this.temp = obj;
  })

  if(this.city != undefined){
    this.ELEMENT_DATA.push({
      index:this.ELEMENT_DATA.length + 1,
      city: this.city+'',
      temp: this.temp,
     });
  }

    this.table.renderRows();

   console.log(this.dataSource);
  this.reindex();
  }


  isAdmin(): Boolean{
    if(localStorage.getItem('myrole') == 'admin'){
     return true
    }
    else {
      this.displayedColumns = ['index' , 'city' , 'temp' ];
      return false
    }
  }

  delete(row:any){
    let index = row+1;
  
  if(this.ELEMENT_DATA.length > 1){
    this.ELEMENT_DATA.forEach( (obj) => {
      if(obj.index == index){
        this.ELEMENT_DATA.splice(index-1,1);
        
      }
    })
  }
  else {
   this.ELEMENT_DATA.splice(0,1);
  }
   this.reindex();
  this.table.renderRows();
  }

  edit( row:any){

    

 this.dialog.open(UpdateDialogComponent , {
  width:'300px'
}).afterClosed().subscribe((data) => {
 console.log(data);
 this.updatecity = data[0];
 this.updatetemp = data[1];
})
   
 
  if(this.updatecity != '' && this.updatetemp != 0){
    this.ELEMENT_DATA[row] = {index:row , city:this.updatecity , temp:this.updatetemp}; 
    this.table.renderRows();

  }
   this.updatecity = ''
   this.updatetemp = 0;
 
  }

  reindex(){
    this.ELEMENT_DATA.sort((a,b) => a.index - b.index);
    this.ELEMENT_DATA.forEach((obj , i = 1) => {
      
     obj.index  = i++;
   
    });
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
