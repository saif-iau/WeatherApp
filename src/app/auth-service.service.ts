import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
 
  isLoggedIn(): Boolean{
  let  token = localStorage.getItem('mytoken');
   return !!token;
  }
}
