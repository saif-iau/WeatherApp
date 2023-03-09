import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { userObject } from './UserObject';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  refresh = new Subject();

//-------------------------------------------
  private temp = new BehaviorSubject<any>({});
  selectedTemp = this.temp.asObservable();

  private city = new BehaviorSubject<any>({});
  selectedCity = this.city.asObservable();


 public getTemp(): Observable<any> {
  return this.temp.asObservable();
}

public setTemp(temp:any) {

  return this.temp.next(temp);

}


public getCity(): Observable<any> {
  return this.city.asObservable();
}

public setCity(city:any) {

  return this.city.next(city);

}

}
