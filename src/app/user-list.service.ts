import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { userObject } from './UserObject';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }
  closeDialog = new Subject();
  //----------------
 private array = new BehaviorSubject<any>({});
  selectedarray = this.array.asObservable();
 public getUsers(): Observable<Set<userObject>> {
  return this.array.asObservable();
}

public setUsers(set: Set<userObject>) {

  return this.array.next(set);

}

}
