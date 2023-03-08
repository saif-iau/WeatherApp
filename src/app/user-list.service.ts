import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { userObject } from './UserObject';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }

 private array = new Subject<Set<userObject>>();

 public getUsers(): Observable<Set<userObject>> {
  return this.array.asObservable();
}

public setUsers(set: Set<userObject>) {
  return this.array.next(set);
}

}
