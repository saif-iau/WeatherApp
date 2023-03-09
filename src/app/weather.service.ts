import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { userObject } from './UserObject';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  refresh = new Subject();


  private temp = new BehaviorSubject<any>({});
  selectedTemp = this.temp.asObservable();
 public getTemp(): Observable<any> {
  return this.temp.asObservable();
}

public setTemp(temp:number) {

  return this.temp.next(temp);

}

}
